import React from 'react';

import logo from '../../assets/images/logo.png';

import { Container } from './styles';

export default function Logo() {
  return (
    <Container>
      <img src={logo} alt="Company Logo" />
    </Container>
  );
}
