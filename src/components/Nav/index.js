import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome, IoMdPeople } from 'react-icons/io';

import { Container } from './styles';

export default function Nav() {
  return (
    <Container>
      <nav>
        <Link to="/">
          <IoMdHome /> Início
        </Link>
        <Link to="/users">
          <IoMdPeople /> Usuários
        </Link>
      </nav>
    </Container>
  );
}
