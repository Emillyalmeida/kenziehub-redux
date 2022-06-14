import api from "../../../services/api";
import { toast } from "react-toastify";
import { LogoutUser, LoginUser } from "./actions";

export const LoginThunk = (data) => (dispatch) => {
  api
    .post("/sessions", data)
    .then((res) => {
      toast.success("Você está logado");
      localStorage.setItem("@KenzieHub/User", JSON.stringify(res.data));
      dispatch(LoginUser(res.data));
    })
    .catch((err) => {
      console.log(err);
      toast.error("Erro! Verifique email e senha");
    });
};

export const LogoutThunk = () => (dispatch) => {
  localStorage.removeItem("@KenzieHub/User");
  dispatch(LogoutUser({}));
};
