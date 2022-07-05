import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
} from './styles';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

// import { RootStackParamList } from '../../@types/navigation';

// type HomeScreenProps = NavigationProp<RootStackParamList, 'Home'>;

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true); 
  const navigation = useNavigation();

  const carData = {
    brand: 'MEL',
    name: 'PICHULA',
    rent: {
      period: 'AO DIA',
      price: 1
    },
    thumbnail: 'https://cdn.sitewebmotors.com.br/uploads/userGallery/5fcfe53240728.png'
    
  }

  function handleDetails() {
    navigation.navigate('CarDetails');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
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

          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <Car
            data={item} 
            onPress={handleDetails} 
          />
        }
      />
    </Container>
  );
};