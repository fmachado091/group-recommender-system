import { FETCH_USERS } from './constants';
import { fetchAllUsers as requestAllUsers } from '../../api/user';

export const fetchAllUsers = () => {
  return {
    type: FETCH_USERS,
    promise: requestAllUsers(),
  }
}
