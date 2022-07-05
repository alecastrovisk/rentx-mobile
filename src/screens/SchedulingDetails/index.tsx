import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
 
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails(){
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete');
  }
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider 
            imagesUrl={['https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>AUDI</Brand>
            <Name>R 5 Coupé</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name='380Km/h' icon={SpeedSvg}/>
          <Accessory name='3.2s' icon={AccelerationSvg}/>
          <Accessory name='800 HP' icon={ForceSvg}/>
          <Accessory name='Gasolina' icon={GasolineSvg}/>
          <Accessory name='Auto' icon={ExchangeSvg}/>
          <Accessory name='2 pessoas' icon={PeopleSvg}/>
        </Accessories>
        
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>

          <Feather
              name='chevron-right'
              size={RFValue(10)}
              color={theme.colors.text}
            />

          <DateInfo>
            <DateTitle>PARA</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal> R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          onPress={handleConfirmRental}
          color={theme.colors.sucess} 
          title='Alugar agora'
        />
      </Footer>
    </Container>
  );
};