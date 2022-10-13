import React from 'react';
import { TouchableOpacityProps, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: keyof RootStackParamList;
}

import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../@types/navigation';

export function Confirmation(){
  const { width } = useWindowDimensions();

  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }
  
  return (
    <Container>
      <LogoSvg width={width}/>

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>
          {message}
        </Message>

        <Footer>
          <ConfirmButton
            title='OK'
            onPress={handleConfirm}
          />
        </Footer>
      </Content>
    </Container>
  );
};