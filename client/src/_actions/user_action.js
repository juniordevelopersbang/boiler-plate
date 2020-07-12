import Axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER} from './types';

export function loginUser(dataToSubmit) {
  const request = Axios.post("/api/users/login", dataToSubmit).then((reseponse) => reseponse.data);

  return {
      type: LOGIN_USER, 
      payload: request
  }
}

export function registerUser(dataToSubmit) {
    const request = Axios.post("/api/users/register", dataToSubmit).then((reseponse) => reseponse.data);
  
    return {
        type: REGISTER_USER, 
        payload: request
    }
  }

export function auth() {
    const request = Axios.get("/api/users/auth").then((reseponse) => reseponse.data);
  
    return {
        type: AUTH_USER, 
        payload: request
    }
  }

