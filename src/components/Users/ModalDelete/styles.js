import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  &.modalDeleteUser {
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.6);

    animation: ${fadeIn} 0.3s linear;
  }
`;

export const ModalContent = styled.section`
  &.modalDeleteUser {
    position: relative;
    background: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 4px;
    width: 80%;
    max-width: 700px;
    height: auto;

    display: flex;
    flex-direction: column;

    .close {
      display: flex;
      align-self: flex-end;
      padding: 5px;
      border: none;
      border-radius: 4px;
    }

    h1 {
      font-size: 1.7rem;
    }

    hr {
      margin: 7px 0;
      border-top: 1px solid #ccc;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 20px;

      button {
        border: 0;
        padding: 15px;
        margin-left: 10px;
        border-radius: 4px;
        color: #fff;
      }
    }

    .delete {
      background: rgba(255, 0, 0, 0.5);

      &:hover {
        background: rgba(255, 0, 0, 0.1);
      }
    }

    .cancel {
      background: #ccc;

      &:hover {
        background: #eee;
      }
    }
  }
`;
