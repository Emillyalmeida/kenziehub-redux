import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Buttons from "../../components/Buttons";
import Select from "../../components/Select";
import { Content, DivLogo, Form } from "./style";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import { toast } from "react-toastify";

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .min(8, "Tamanho minimo 8 caracters"),
    confirmPassword: yup
      .string()
      .required("Confimação de senha obrigatoria")
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

  const postCadastro = ({ name, email, password, course_module }) => {
    const user = { name, email, password, course_module };
    user.contact = "none";
    user.bio = "Lorem ipsum dolor emet";

    api
      .post("/users", user)
      .then((res) => {
        toast.success("Conta criada com sucesso ");
        return history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! E-mail já cadastrado");
      });
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
          <Buttons whiteTheme type="submit">
            Casdastrar
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
