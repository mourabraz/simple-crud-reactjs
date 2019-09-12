import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  div {
    width: 100%;
    background: #fff;
    padding: 15px;

    h1 {
      font-size: 2rem;
    }
    hr {
      margin: 10px 0;
      border-top: 1px solid #ccc;
    }

    p {
      color: #999;
    }
  }
`;
