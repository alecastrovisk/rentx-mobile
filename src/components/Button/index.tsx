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
  enabled = true,
  loading = false,
  onPress,
}: Props){
  const theme = useTheme();
  
  return (
    <Container
     onPress={onPress} 
     color={color}
     enabled={enabled}
     style={{ opacity: (enabled === false || loading === true) ? .5 : 1}}
    >
      {
      loading  
        ? <ActivityIndicator color={theme.colors.shape} />
        : <Title>{title}</Title>
      }
    </Container>
  );
};