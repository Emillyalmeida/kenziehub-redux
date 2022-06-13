import Container from "../../components/Container";
import Logo from "../../components/Logo";
import { Content, DivLogo, Form } from "./style";
import Input from "../../components/Input";
import Buttons from "../../components/Buttons";
import Select from "../../components/Select";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch } from "react-redux";
import { registerUser } from "../../store/modules/userAuth/thunk";

const Register = ({ auth }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome Obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        " não deve conter numeros"
      ),
    email: yup.string().required("Email Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .min(8, "Tamanho minimo 8 caracters"),
    confirmPassword: yup
      .string()
      .required("Confimação de email obrigatoria")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),

    course_module: yup.string().required("Selecione um modulo"),
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

  const postCadastro = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <Container>
      <DivLogo>
        <Logo />
        <button onClick={() => history.push("/")}>Voltar</button>
      </DivLogo>
      <Content>
        <h2>Crie sua conta</h2>
        <p>Rapido e gratis, vamos nessa</p>

        <Form onSubmit={handleSubmit(postCadastro)} component="form">
          <Input
            register={register}
            name="name"
            label="Nome"
            placeholder="Digite aqui seu nome"
            error={errors.name?.message}
          />
          <Input
            register={register}
            name="email"
            label="E-mail"
            placeholder="Digite aqui seu email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            label="Senha"
            name="password"
            placeholder="Digite aqui sua senha"
            error={errors.password?.message}
            type="password"
          />
          <Input
            register={register}
            name="confirmPassword"
            label="Confirme Senha"
            placeholder="Digite novamente sua senha"
            error={errors.confirmPassword?.message}
            type="password"
          />
          <Select
            label="Selecione Modulo"
            placeholder="Selecione Modulo"
            error={errors.course_module?.message}
            register={register}
            name="course_module"
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </Select>

          {/* {!!errors.course_module?.message && (
            <span>{errors.course_module?.message}</span>
          )} */}

          <Buttons whiteTheme type="submit">
            Casdastrar
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
