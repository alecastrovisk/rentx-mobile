import React, { useState } from 'react';
import theme from '../../styles/theme';

import { BackButton } from '../../components/BackButton';
import { Alert, StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import {
  Calendar, 
  DateProps, 
  generateInterval,
  MarkedDateProps
} from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';

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

import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns/esm';


interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Scheduling(){
  const [lastSelectedDate, setLastSelectedDate] = useState<DateProps>({} as DateProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const navigation = useNavigation();

  const route = useRoute();
  const { car } = route.params as Params;
  
  function handleConfirmRental() {
    if(!rentalPeriod.start || !rentalPeriod.end) {
      Alert.alert('Selecione o intervalo para alugar');
    }else {
      navigation.navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates)
      });
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DateProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval); 

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    
    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
    })
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle='light-content'
          translucent
          backgroundColor='transparent'
        />
        <BackButton color={theme.colors.shape} onPress={handleBack}/>
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          onDayPress={handleChangeDate}
          markedDates={markedDates}
        />
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