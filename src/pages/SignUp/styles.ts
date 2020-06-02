import styled from 'styled-components';
import { shade } from 'polished';
import sigUpBacgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;
  width: 100%;
  max-width: 700px;
  align-items: center;
  form {
    margin: 80px 0;
    width: 340px;
    height: 250px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  a {
    text-decoration: none;
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  > a {
    text-decoration: none;
    color: #f4ede8;
    display: flex;
    align-items: center;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${sigUpBacgroundImg}) no-repeat center;
  background-size: cover;
`;
