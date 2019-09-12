import React from 'react';

import Logo from '../Logo';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <div>
        <h1>Company name!</h1>
        <p>
          <i>Exemplo ilustrativo...</i>
        </p>
      </div>
    </Container>
  );
}
