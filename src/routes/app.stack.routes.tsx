import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return(
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >       
      {/* <Screen
        name='Splash'
        component={Splash}
      /> */}
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='CarDetails'
        component={CarDetails}
      />
      <Screen
        name='Scheduling'
        component={Scheduling}
      />
      <Screen
        name='SchedulingDetails'
        component={SchedulingDetails}
      />
      <Screen
        name='Confirmation'
        component={Confirmation}
      />
      <Screen
        name='MyCars'
        component={MyCars}
      />       
    </Navigator>
  );
}