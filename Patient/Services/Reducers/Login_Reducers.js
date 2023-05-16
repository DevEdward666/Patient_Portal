import {SET_DATA, SETMOBILENO,SET_SIGNED_IN} from '../Types/Login_Types';

const pages = {
  isSignedIn:false,
  data: [],
  mobileno: [],
  loading: false,
};
const Login_Reducer = (data_state = pages, actions) => {
  switch (actions.type) {
    case SET_DATA:
      return {...data_state, data: actions.payload};
    case SETMOBILENO:
      return {...data_state, mobileno: actions.payload};
    case SET_SIGNED_IN:
      return {...data_state, isSignedIn: actions.payload};
    default:
      return data_state;
  }
};
export default Login_Reducer;
