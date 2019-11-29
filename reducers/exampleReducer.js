const INITIAL_STATE = {
  nome: 'alex',
  email: 'alex@teste',
  senha: '',
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'modifica_email') {
    return (state = {...state, email: action.payload});
  }
  return state;
};
