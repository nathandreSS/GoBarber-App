import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContent } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/Toast';
import api from '../../services/api';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const handleSubmit = useCallback(
    async (data: SignUpData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um email válido')
            .required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No minimo 6 digitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);
        addToast({ type: 'success', title: 'Usuário cadastrado com sucesso' });
        history.push('/');
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContent>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContent>
      </Content>
    </Container>
  );
};

export default SignUp;
