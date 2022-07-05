import React from 'react';
import theme from '../../styles/theme';

import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export function Scheduling(){
  const navigation = useNavigation();
  
  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton color={theme.colors.shape} onPress={() => {}}/>
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>
              18/06/2022
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button
          onPress={handleConfirmRental}
          title='Confirmar'
        />
      </Footer>
    </Container>
  );
};