import { addTechs, patchTechs, deleteTechs, setTechs } from "./actions";
import api from "../../../services/api";
import { toast } from "react-toastify";

export const PostTechThunk = (data, token, onClose) => (dispatch, getState) => {
  const { techs } = getState();

  api
    .post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      const list = [...techs, res.data];
      localStorage.setItem("@KenzieHub/techs", JSON.stringify(list));
      dispatch(addTechs(list));
      toast.success("A tecnologia foi cadastrada");
      onClose();
    })
    .catch((err) => {
      console.log(err);
      toast.error("Ops, já existe essa tecnologia");
    });
};

export const getTechsThunk = () => (dispatch, getState) => {
  const { user } = getState();
  api
    .get(`/users/${user.user.id}`)
    .then((res) => {
      localStorage.setItem("@KenzieHub/techs", JSON.stringify(res.data));
      dispatch(setTechs(res.data.techs));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const patchTechsThunk =
  (data, id, token, onClose) => (dispatch, getState) => {
    const { techs } = getState();

    api
      .put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const findTech = techs.find((tech) => tech.id === id);
        findTech.status = data.status;
        localStorage.setItem("@KenzieHub/techs", JSON.stringify([...techs]));
        dispatch(patchTechs([...techs]));
        toast.success("A tecnologia foi atualizada");
        onClose();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, Houve um erro");
      });
  };

export const deleteTechsThunk =
  (id, onCloseInfo, onDelClose) => (dispatch, getState) => {
    const { techs } = getState();
    const { user } = getState();
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        const list = techs.filter((tech) => tech.id !== id);
        localStorage.setItem("@KenzieHub/techs", JSON.stringify(list));
        dispatch(deleteTechs(list));
        toast.success("A tecnologia foi excluida");

        onDelClose();
        onCloseInfo();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops, não foi possivel excluir");
      });
  };
