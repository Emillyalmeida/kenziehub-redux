const user = JSON.parse(localStorage.getItem("@KenzieHub/User")) || {};

const userAuthReducer = (state = user, action) => {
  switch (action.type) {
    case "@User/LogIn":
      const { auth } = action;
      return auth;

    case "@User/LogOut":
      const { vazio } = action;
      console.log(vazio);
      return vazio;

    default:
      return state;
  }
};

export default userAuthReducer;
