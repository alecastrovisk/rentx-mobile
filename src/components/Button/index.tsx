import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Title
} from './styles';

interface Props extends TouchableOpacityProps{
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title, 
  color,
  disabled = false,
  loading = false,
  onPress,
}: Props){
  const theme = useTheme();
  
  return (
    <Container
     onPress={onPress} 
     color={color}
     disabled={disabled}
     style={{ opacity: (disabled === false || loading === true) ? 1 : .5}}
    >
      {
      loading  
        ? <ActivityIndicator color={theme.colors.shape} />
        : <Title>{title}</Title>
      }
    </Container>
  );
};