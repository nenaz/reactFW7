import { get } from 'lodash';
import { Dispatch } from 'redux';
import { USER_STORE_KEY } from './coordinates-constants';
import { Send } from '@/utils/server-interaction';

export const SET_CURRENT_POSITION = `${USER_STORE_KEY}/SET_CURRENT_POSITION`;

export const setCurrentPositionAction = () => (dispatch: Dispatch<any>) => {
  const geolocation = get(window.navigator, 'geolocation');
  geolocation.getCurrentPosition((position) => {
    console.log('positon', position);
    const obj = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }
    // Send('setUserOnlineCoordinates', { ...obj });
    dispatch({
      type: SET_CURRENT_POSITION,
      payload: obj,
    });
  });
};

export const setUserCoordinaterAction = () => (dispatch: Dispatch<any>) => {
  dispatch(setCurrentPositionAction());
};

export const SET_USER_ONLINE = `${USER_STORE_KEY}/SET_USER_ONLINE`;

export const setUserOnline = (userId: string, isOnline: boolean) => (dispatch: Dispatch<any>) => {
  return Send('setUserOnline', { _id: userId, isOnline })
    .then(() => {
      dispatch({
        type: SET_USER_ONLINE,
        payload: true,
      })
    });
};
