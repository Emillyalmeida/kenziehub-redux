import { useState } from "react";
import { useEffect } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Container from "../../components/Container";
import Logo from "../../components/Logo";
import CardTech from "../../components/CardTech";

import { NavBar, Header, Main, ListTech } from "./style";

import api from "../../services/api";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AlertDialogFooter,
  Button,
  AlertDialogBody,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialog,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import Buttons from "../../components/Buttons";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddTech from "../../components/Modals/modal-create";

import { PostTechThunk, getTechsThunk } from "../../store/modules/techs/thunk";

const Dashboard = () => {
  const listTechs = useSelector(({ techs }) => techs);
  const dataUser = useSelector(({ user }) => user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechsThunk());
  }, []);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@kenzieHub:token")) || ""
  );

  const [detailTech, setdetail] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: open, onOpen: openOn, onClose: closeOn } = useDisclosure();
  const {
    isOpen: isDelete,
    onOpen: onDelOpen,
    onClose: onDelClose,
  } = useDisclosure();

  const history = useHistory();

  const logout = () => {};

  const postTech = (data) => {
    dispatch(PostTechThunk(data, dataUser.token, onClose));
  };

  const infoTech = (id) => {
    const info = listTechs.find((tec) => tec.id === id);
    console.log(info);
    setdetail(info);
    openOn();
  };

  const pacthTech = (data) => {
    // const { status } = data;
    const pacth = { status: data.status };
    console.log(pacth);

    api
      .put(`/users/techs/${detailTech.id}`, pacth, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("A tecnologia foi atualizada");
        // getTechs();
        closeOn();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, Houve um erro");
      });
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${detailTech.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("A tecnologia foi excluida");
        // getTechs();
        onDelClose();
        closeOn();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, não foi possivel excluir");
      });
  };

  const { register: regispatch, handleSubmit: handlePatch } = useForm();

  return (
    <Container>
      <NavBar>
        <Logo />
        <button onClick={() => logout()}>Sair</button>
      </NavBar>
      <Header>
        <h2>Olá, {dataUser.user.name}</h2>
        <p>{dataUser.user.course_module}</p>
      </Header>
      <Main>
        <div>
          <h3>Tecnologias</h3>
          <button onClick={onOpen}>+</button>
          <AddTech isOpen={isOpen} onClose={onClose} postTech={postTech} />
        </div>
        <ListTech>
          {listTechs && listTechs.length > 0 ? (
            listTechs.map((tec) => (
              <CardTech
                key={tec.id}
                title={tec.title}
                status={tec.status}
                open={infoTech}
                id={tec.id}
              ></CardTech>
            ))
          ) : (
            <h3> Nenhuma tecnologia cadastrada</h3>
          )}
          <ChakraProvider resetCSS={false}>
            <Modal isOpen={open} onClose={closeOn}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Tecnologia Detalhes</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6} component="form">
                  <Input
                    register={regispatch}
                    name="title"
                    label="Nome do projeto"
                    placeholder={detailTech.title}
                    // error={errors.name?.message}
                    value={detailTech.title}
                    disabled
                  />

                  <Select
                    placeholder={detailTech.status}
                    // error={errors.status?.message}
                    register={regispatch}
                    name="status"
                    label="Selecione nivel"
                  >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </Select>
                </ModalBody>

                <ModalFooter>
                  <Buttons whiteTheme onClick={handlePatch(pacthTech)}>
                    Salvar alterações
                  </Buttons>
                  <button className="excluir" onClick={onDelOpen}>
                    Excluir
                  </button>

                  <AlertDialog isOpen={isDelete} onClose={onDelClose}>
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Delete listTechs
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Tem certeza que deseja excluir essa tecnologia?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button onClick={onDelClose}>Cancel</Button>
                          <Button
                            colorScheme="red"
                            onClick={() => deleteTech()}
                            ml={3}
                          >
                            Delete
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </ChakraProvider>
        </ListTech>
      </Main>
    </Container>
  );
};

export default Dashboard;
