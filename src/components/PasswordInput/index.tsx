import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import {
  Container,
  InputText,
  IconContainer,
} from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({
  iconName, 
  value,
  ...rest
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value)
  }

  const theme = useTheme();

  function handlePasswordVisbilityChange() {
    setIsPasswordVisible(prevState => !prevState);
  }
  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? 
            theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>

      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        secureTextEntry={isPasswordVisible}
        autoCorrect={false}
        {...rest}
      />

      <TouchableOpacity onPress={handlePasswordVisbilityChange}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </TouchableOpacity>
    </Container>
  );
};