import React, { useState } from 'react';

import {
  Container,
  Title
} from './styles';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
}

export function Button({
  title, 
  color,
  enabled = true,
  onPress,
}: Props){
  return (
    <Container
     onPress={onPress} 
     color={color}
     enabled={enabled}
     style={{ opacity: enabled ? 1 : 0.5}}
    >
      <Title>{title}</Title>
    </Container>
  );
};