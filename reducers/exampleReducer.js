const INITIAL_STATE = {
  nome: 'alex',
  email: 'alex@teste',
  senha: '',
  texto: '',
  textoReduxThunk: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modifica_email':
      return (state = {...state, email: action.payload});
    case 'modifica_texto':
      return (state = {...state, texto: action.payload});
    case 'redux_thunk':
      return (state = {...state, textoReduxThunk: action.payload});
    default:
      return state;
  }
};
