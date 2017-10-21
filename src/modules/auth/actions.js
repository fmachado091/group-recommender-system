import { attemptLogin as showDialog } from '../../api/auth';
import { ATTEMPT_LOGIN } from './constants';

export function attemptLogin() {
  return {
    type: ATTEMPT_LOGIN,
    promise: showDialog(),
  }
}