import api from "../../../services/api";
import { toast } from "react-toastify";
import { LogoutUser, LoginUser } from "./actions";
// import { useHistory } from "react-router-dom";

export const LoginThunk = (data) => (dispatch) => {
  api
    .post("/sessions", data)
    .then((res) => {
      console.log(res);
      toast.success("Você está logado");
      localStorage.setItem("@KenzieHub/User", JSON.stringify(res.data));
      dispatch(LoginUser(res.data));
    })
    .catch((err) => {
      console.log(err);
      toast.error("Erro! Verifique email e senha");
    });
};
