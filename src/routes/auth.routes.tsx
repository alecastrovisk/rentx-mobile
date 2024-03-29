import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Confirmation } from '../screens/Confirmation';
import { Splash } from '../screens/Splash';
import { SingIn } from '../screens/SingIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Screen
        name='Splash'
        component={Splash}
      /> */}
      <Screen
        name='SignIn'
        component={SingIn}
      />
      <Screen
        name='SignUpFirstStep'
        component={SignUpFirstStep}
      />
      <Screen
        name='SignUpSecondStep'
        component={SignUpSecondStep}
      />
      <Screen
        name='Confirmation'
        component={Confirmation}
      />  
    </Navigator>
  );
}