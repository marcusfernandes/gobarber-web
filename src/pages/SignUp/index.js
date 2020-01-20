import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const disatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    disatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoPenisBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua pênis secreta"
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho um conta!</Link>
      </Form>
    </>
  );
}
