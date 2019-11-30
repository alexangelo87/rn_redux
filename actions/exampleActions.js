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

export const exampleReduxThunk = texto => {
  return dispatch => {
    actionAsync(texto).then(res => {
      return dispatch({
        type: 'redux_thunk',
        payload: res,
      });
    });
  };
};

function actionAsync(texto) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(texto);
    }, 1000);
  });
}
