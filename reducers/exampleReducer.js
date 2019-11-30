const INITIAL_STATE = {
  nome: 'alex',
  email: 'alex@teste',
  senha: '',
  texto: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'modifica_email':
      return (state = {...state, email: action.payload});
    case 'modifica_texto':
      return (state = {...state, texto: action.payload});
    default:
      return state;
  }
};
