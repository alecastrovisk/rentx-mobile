import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';

import {
  Container,
  Header,
  Steps,
  Title,
  Subtitle,
  Form,
  FormTitle,
} from './styles';

import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { PasswordInput } from '../../../components/PasswordInput';
import { useTheme } from 'styled-components';

export function SignUpSecondStep() {
  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>
            Crie sua{'\n'} conta
          </Title>
          <Subtitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </Subtitle>

          <Form>
            <FormTitle>
              2. Senha
            </FormTitle>

            <PasswordInput
              iconName="lock"
              placeholder="senha"
            />
            <PasswordInput
              iconName="lock"
              placeholder="repetir senha"
            />
          </Form>

          <Button
            onPress={() => { }}
            title="Cadastrar"
            color={theme.colors.sucess}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};