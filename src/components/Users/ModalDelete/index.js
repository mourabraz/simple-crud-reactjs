import React from 'react';
import PropTypes from 'prop-types';

import { Container, ModalContent } from './styles';

function ModalAdd({ show, user, handleClose, handleSave, handleCancel }) {
  return (
    <Container className="modalDeleteUser" show={show ? 1 : 0}>
      <ModalContent className="modalDeleteUser">
        <button
          type="button"
          className="close"
          onClick={() => handleClose(user.id)}
        >
          close
        </button>
        <h1>Exclusão do Usuário</h1>
        <hr />

        <p>Deseja realmente excluiro usuário de nome ${user.name}?</p>

        <div className="buttons">
          <button
            type="button"
            className="delete"
            onClick={() => handleSave(user.id)}
          >
            Excluir
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => handleCancel(user.id)}
          >
            Cancelar
          </button>
        </div>
      </ModalContent>
    </Container>
  );
}

ModalAdd.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default ModalAdd;
