import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: menu;
  display: flex;
  flex: 1;
  background: var(--background-color-main);

  nav {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 10px;

    a {
      display: flex;
      align-items: center;
      padding: 10px;
      background: #fff;
      text-decoration: none;
      border-radius: 4px;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.19), 0 1px 5px rgba(0, 0, 0, 0.23);
      color: var(--background-color);

      & + a {
        margin-top: 10px;
      }

      &:active {
        box-shadow: none;
        opacity: 0.8;
      }

      &:hover {
        background: linear-gradient(
          to right,
          #fff 90%,
          var(--background-color-secondary) 10%
        );
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
