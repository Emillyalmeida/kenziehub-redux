const techs = JSON.parse(localStorage.getItem("@KenzieHub/techs")) || [];

const techsReducer = (state = techs, action) => {
  switch (action.type) {
    case "@techs/ADD":
      const { listTechs } = action;
      return listTechs;

    case "@techs/DELETE":
      const { techs } = action;
      return techs;

    case "@techs/PACTh":
      return;

    default:
      return state;
  }
};

export default techsReducer;
