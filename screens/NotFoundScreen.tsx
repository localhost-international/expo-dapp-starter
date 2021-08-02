import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import styled from 'styled-components/native';
import { Container, Text, Link } from '../components/StyledComponents';

import { RootStackParamList } from '../types';


export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <Container>
      <Text>This screen doesn't exist.</Text>
      <Link onPress={() => navigation.replace('Root')}>
        <LinkText>Go to home screen!</LinkText>
      </Link>
    </Container>
  );
}


export const LinkText = styled(Text)`
  font-size: 14px;
  color:#2e78b7;
`;