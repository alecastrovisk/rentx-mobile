import React, { useEffect, useState } from 'react';
import {
  StatusBar
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  useEffect(() => {
    let isMounted = true;
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        if(isMounted){
          setCars(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if(isMounted){
          setLoading(false);
        }
      }
    }
    fetchCars();
    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={12}
          />

          {
            !loading &&          
            <TotalCars>
              Total de {cars.length} carros
            </TotalCars>
          }
        </HeaderContent>
      </Header>

      {loading ? <LoadAnimation /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Car
              data={item}
              onPress={() => handleDetails(item)}
            />
          }
        />
      } 
    </Container>
  );
};

