import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButtonProps extends TouchableOpacityProps{
  color?: string;
  disabled: boolean;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color, theme }) => color ? color : theme.colors.main };

  margin-bottom: 8px;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) => 
    light ? theme.colors.header : theme.colors.shape
  };
`;