import { useState, useEffect } from "react";

import Container from "../../components/Container";
import Logo from "../../components/Logo";
import CardTech from "../../components/CardTech";

import { NavBar, Header, Main, ListTech } from "./style";

import { useDisclosure } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";

import AddTech from "../../components/Modals/modal-create";
import ModalInfo from "../../components/Modals/modal-info";

import {
  PostTechThunk,
  getTechsThunk,
  patchTechsThunk,
} from "../../store/modules/techs/thunk";

const Dashboard = () => {
  const listTechs = useSelector(({ techs }) => techs);
  const dataUser = useSelector(({ user }) => user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechsThunk());
  }, []);

  const [detailTech, setdetail] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure();

  const logout = () => {};

  const postTech = (data) => {
    dispatch(PostTechThunk(data, dataUser.token, onClose));
  };

  const infoTech = (id) => {
    const info = listTechs.find((tec) => tec.id === id);
    console.log(info);
    setdetail(info);
    onOpenInfo();
  };

  const pacthTech = (data) => {
    const pacth = { status: data.status };
    console.log(pacth);
    dispatch(
      patchTechsThunk(pacth, detailTech.id, dataUser.token, onCloseInfo)
    );
  };

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
                isInfo={infoTech}
                id={tec.id}
              ></CardTech>
            ))
          ) : (
            <h3> Nenhuma tecnologia cadastrada</h3>
          )}
          <ModalInfo
            detailTech={detailTech}
            isInfo={isInfo}
            onCloseInfo={onCloseInfo}
            pacthTech={pacthTech}
          />
        </ListTech>
      </Main>
    </Container>
  );
};

export default Dashboard;
