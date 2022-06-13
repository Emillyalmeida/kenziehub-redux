const techs = JSON.parse(localStorage.getItem("@KenzieHub/techs")) || [];

const techsReducer = (state = techs, action) => {
  switch (action.type) {
    case "@techs/ADD":
      const { listTechs } = action;
      return listTechs;

    case "@techs/DELETE":
      const { removedTech } = action;
      return removedTech;

    case "@techs/PACTH":
      const { updateTech } = action;
      return updateTech;

    case "@techs/SETLIST":
      const { setList } = action;
      return setList;

    default:
      return state;
  }
};

export default techsReducer;
