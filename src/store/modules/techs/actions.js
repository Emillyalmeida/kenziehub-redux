export const addTechs = (listTechs) => ({ type: "@techs/ADD", listTechs });

export const deleteTechs = (removedTech) => ({
  type: "@techs/DELETE",
  removedTech,
});

export const patchTechs = (updateTech) => ({
  type: "@techs/PACTH",
  updateTech,
});

export const setTechs = (setList) => ({
  type: "@techs/SETLIST",
  setList,
});
