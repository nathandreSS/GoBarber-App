import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContent } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface SignInFormData {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSumbit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email valido')
            .required('email obrigatório'),
          password: Yup.string().required('senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data);
        addToast({ type: 'success', title: 'sucesso na autenticação' });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description: 'Verifique se o email e senha estão corretos',
          });
        }
      }
    },
    [addToast, signIn],
  );

  return (
    <Container>
      <Content>
        <AnimationContent>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSumbit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <a href="Forgot">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimationContent>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
