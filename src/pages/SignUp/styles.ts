import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signUpBacgroundImg from '../../assets/sign-up-background.png';

const appearFromRight = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;
export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    height: 250px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
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
  background: url(${signUpBacgroundImg}) no-repeat center;
  background-size: cover;
`;
