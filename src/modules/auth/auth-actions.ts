import Cookie from 'js-cookie';
import { get } from 'lodash';
import { Send } from '@/utils/server-interaction';
import { ACCESS_TOKEN_COOKIE_KEY, AUTH_TOKEN_COOKIE_EXPIRES, AUTH_STORE_KEY } from './auth-consts';

export const SET_AUTH_INFO = `${AUTH_STORE_KEY}/SET_AUTH_INFO`;

export const goAuth = () => (
  dispatch: Function,
  getState: Function,
) => {
  return Send('authUser', {
    username: 'nenaz',
    password: '4276',
  }).then((authResponse: any) => {
    console.log('authResponse', authResponse);
    const { token } = authResponse;
    const expires = AUTH_TOKEN_COOKIE_EXPIRES;
    Cookie.set(
      ACCESS_TOKEN_COOKIE_KEY,
      token,
      { expires: expires > 0 ? new Date(new Date().getTime() + expires * 1000) : undefined },
    );
    dispatch({
      type: SET_AUTH_INFO,
      payload: authResponse,
    });
    return get(authResponse, 'auth', get(authResponse, 'result'));
  });
};
