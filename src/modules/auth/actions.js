import { 
  attemptLogin as showDialog,
  fetchLogin,
} from '../../api/auth';
import { ATTEMPT_LOGIN, FETCH_LOGIN, UPDATE_USER_INFO } from './constants';

export function attemptLogin() {
  return {
    type: ATTEMPT_LOGIN,
    promise: showDialog(),
  }
}

export function fetchUserInfo(code) {
  return {
    type: FETCH_LOGIN,
    promise: fetchLogin(code),
  }
}

export function updateUserInfo(userInfo) {
  return {
    type: UPDATE_USER_INFO,
    payload: { userInfo },
  }
}
