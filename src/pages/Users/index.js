/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FaSpinner, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import ModalAddUser from '../../components/Users/ModalAdd';
import ModalDeleteUser from '../../components/Users/ModalDelete';

import { Container, ListWrap, List, Button, ButtonAdd } from './styles';

export default class Users extends Component {
  state = {
    loading: false,
    saving: false,
    showModalAddUser: false,
    users: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await api.get('/users');

    const users = response.data;
    // eslint-disable-next-line no-param-reassign
    users.map(u => (u.showModalDelete = false));

    this.setState({ users, loading: false });
  }

  showModalAddUser = () => {
    this.setState({ showModalAddUser: true });
  };

  hideModalAddUser = () => {
    this.setState({ showModalAddUser: false });
  };

  handleAddUser = async ({ name, email }) => {
    const { users } = this.state;
    this.setState({ saving: true, showModalAddUser: false });

    await api
      .post('/users', { name, email })
      .then(res => {
        const user = { ...res.data, showModalDelete: false };

        toast.success('Success! User added to list!');

        this.setState({
          saving: false,
          users: [...users, user],
        });
      })
      .catch(() => {
        toast.error('Whoops! Something goes wrong!');
      });
  };

  showModalDeleteUser = id => {
    const { users } = this.state;

    const user = users.find(u => u.id === id);
    user.showModalDelete = true;

    this.setState({ users: [...users] });
  };

  hideModalDeleteUser = id => {
    const { users } = this.state;

    const user = users.find(u => u.id === id);
    user.showModalDelete = false;

    this.setState({ users: [...users] });
  };

  handleDeleteUser = async id => {
    this.hideModalDeleteUser(id);

    const { users } = this.state;

    await api
      .delete(`/users/${id}`)
      .then(() => {
        this.setState({ users: users.filter(u => u.id !== id) });

        toast.success('Success! User removed from list!');
      })
      .catch(() => {
        toast.error('Whoops! Something goes wrong!');
      });
  };

  render() {
    const { loading, saving, users, showModalAddUser } = this.state;

    return (
      <Container>
        <div>
          <h1>Cadastro de Usuários</h1>
          <hr />
          <p>Incluir, Listar, Alterar e Excluir</p>
        </div>

        <ListWrap loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#999" size={42} />
          ) : (
            <>
              <ButtonAdd
                saving={saving ? 1 : 0}
                onClick={() => {
                  this.showModalAddUser();
                }}
              >
                {saving ? (
                  <FaSpinner color="#fff" size={14} />
                ) : (
                  <FaPlus color="#fff" size={14} />
                )}
              </ButtonAdd>
              <ModalAddUser
                show={showModalAddUser}
                handleClose={this.hideModalAddUser}
                handleSave={this.handleAddUser}
                handleCancel={this.hideModalAddUser}
              />
              <List>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th width="102">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(u => (
                    <tr key={String(u.id)}>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>
                        <Button onClick={() => {}}>
                          <FaEdit color="#FFF" size={10} />
                        </Button>
                        <Button
                          action="delete"
                          onClick={() => {
                            this.showModalDeleteUser(u.id);
                          }}
                        >
                          <FaTrash color="#FFF" size={10} />
                        </Button>
                        <ModalDeleteUser
                          show={u.showModalDelete}
                          user={u}
                          handleCancel={this.hideModalDeleteUser}
                          handleClose={this.hideModalDeleteUser}
                          handleSave={this.handleDeleteUser}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </List>
            </>
          )}
        </ListWrap>
      </Container>
    );
  }
}
