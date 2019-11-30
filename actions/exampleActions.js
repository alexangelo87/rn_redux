export const modificaEmail = texto => {
  return {
    type: 'modifica_email',
    payload: texto,
  };
};

export const modificaTexto = texto => {
  return {
    type: 'modifica_texto',
    payload: texto,
  };
};
