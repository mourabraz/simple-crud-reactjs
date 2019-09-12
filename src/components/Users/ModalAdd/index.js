/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Container, ModalContent } from './styles';

class ModalAdd extends Component {
  static defaultProps = {
    show: false,
    validationError: {},
  };

  static propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    validationError: PropTypes.object,
  };

  state = {
    name: '',
    email: '',
    validationError: {},
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleInternalSave = ({ name, email }) => {
    const { handleSave } = this.props;

    this.setState({ validationError: {} });

    const schema = Yup.object().shape({
      name: Yup.string('Not valid name').required('Name is required'),
      email: Yup.string()
        .email('Not valid email')
        .required('Email is required'),
    });

    schema
      .validate({ name, email })
      .then(() => {
        handleSave({ name, email });

        this.setState({ name: '', email: '', validationError: {} });
      })
      .catch(err => {
        this.setState({ validationError: err });
      });
  };

  handleInternalClose = () => {
    const { handleClose } = this.props;

    this.setState({ name: '', email: '', validationError: {} });

    handleClose();
  };

  handleInternalCancel = () => {
    const { handleCancel } = this.props;

    this.setState({ name: '', email: '', validationError: {} });

    handleCancel();
  };

  render() {
    const { name, email, validationError } = this.state;

    const { show } = this.props;

    return (
      <Container className="modalAddUser" show={show ? 1 : 0}>
        <ModalContent className="modalAddUser">
          <button
            type="button"
            className="close"
            onClick={this.handleInternalClose}
          >
            close
          </button>
          <h1>Cadastro de Novo Usuário</h1>
          <hr />

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={this.handleNameChange}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={this.handleEmailChange}
          />

          {validationError.message && (
            <div className="error">
              <p>
                <p>{validationError.message}</p>
              </p>
            </div>
          )}

          <div className="buttons">
            <button
              type="button"
              className="save"
              onClick={() => this.handleInternalSave({ name, email })}
            >
              Salvar
            </button>
            <button
              type="button"
              className="cancel"
              onClick={this.handleInternalCancel}
            >
              Cancelar
            </button>
          </div>
        </ModalContent>
      </Container>
    );
  }
}

export default ModalAdd;
