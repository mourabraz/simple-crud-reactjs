import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  > div {
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

export const ButtonAdd = styled.button.attrs(props => ({
  type: 'button',
  disabled: props.saving,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 37px;
  height: 37px;
  margin-bottom: 15px;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  background: var(--background-color);

  &:hover {
    background: var(--background-color-secondary);
  }

  ${props =>
    props.saving &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  &[disabled] {
    background: var(--background-color-secondary);
    opacity: 0.5;
  }

  &[disabled]:hover {
    background: var(--background-color-secondary);
    opacity: 0.5;
  }
`;

export const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.table`
  width: 100%;
  /* margin-bottom: 1.5em; */
  border-spacing: 0;

  thead {
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;

    th {
      background-color: var(--background-color);
      border: 1px solid var(--background-color);
      font-weight: normal;
      text-align: center;
      color: white;
    }
  }

  tbody,
  tr,
  th,
  td {
    padding: 0;
    text-align: left;
    white-space: normal;
  }

  th,
  td {
    padding: 0.5em;
    vertical-align: middle;
  }

  tbody tr:nth-child(even) td {
    background: rgba(0, 0, 0, 0.05);
  }

  /* tbody:hover tr:nth-child(even) td {
    background: white;
  } */

  tbody:hover td {
    color: transparent;
    text-shadow: 0 0 3px #aaa;

    button {
      opacity: 0.3;
    }
  }

  tbody:hover tr:hover td {
    color: #333;
    text-shadow: 0 1px 0 #fff;

    button {
      opacity: 1;
    }
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  padding: 8px;
  margin-left: 8px;
  border-radius: 4px;
  background: var(--background-color);

  &:hover {
    background: linear-gradient(
      to bottom,
      var(--background-color-secondary) 90%,
      ${props =>
          props.action && props.action === 'delete'
            ? 'red'
            : 'var(--background-color)'}
        10%
    );
  }
`;
