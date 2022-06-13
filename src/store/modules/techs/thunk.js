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
      console.log(res);
      localStorage.setItem("@KenzieHub/techs", JSON.stringify(res.data));
      dispatch(setTechs(res.data.techs));
    })
    .catch((err) => {
      console.log(err);
    });
};
