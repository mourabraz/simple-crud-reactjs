import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background: #fff;

  div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 15px;
      margin-bottom: 10px;
      font-size: 2rem;
    }

    p {
      color: #999;
    }
  }
`;
