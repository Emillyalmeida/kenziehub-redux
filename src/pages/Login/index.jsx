import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Buttons from "../../components/Buttons/index";
import { Content, DivLogo, Form, DivNotcount } from "./style";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginThunk } from "../../store/modules/userAuth/thunk";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .min(8, "Tamanho minimo 8 caracters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const postLogin = async (data) => {
    dispatch(LoginThunk(data));
  };

  return (
    <Container>
      <DivLogo>
        <Logo></Logo>
      </DivLogo>
      <Content>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit(postLogin)}>
          <Input
            register={register}
            name="email"
            label="E-mail"
            placeholder="Digite aqui seu email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            name="password"
            label="Senha"
            placeholder="Digite aqui sua senha"
            error={errors.password?.message}
            type="password"
          />
          <Buttons whiteTheme type="submit">
            Entrar
          </Buttons>
        </Form>
        <DivNotcount>
          <p>Ainda não possui conta?</p>
          <Buttons type="button" onClick={() => history.push("/register")}>
            Casdastre-se
          </Buttons>
        </DivNotcount>
      </Content>
    </Container>
  );
};

export default Login;
