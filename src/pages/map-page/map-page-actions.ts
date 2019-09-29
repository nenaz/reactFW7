import { Dispatch } from "redux";
import { Send } from "@/utils/server-interaction";
import { WsConnection } from "@/utils/server-websocket";
import { getAuthUserId } from "@/modules/auth";
import { getCoordinates } from "./map-page-selectors";
// import { setCurrentPositionAction, setUserCoordinaterAction } from "@/modules/coordinates/coordinates-actions";

const ws = new WsConnection();

export const getWsConnect = () => (dispatch: Function, getState: Function) => {
  const connect = ws.wsConnect();
  const state = getState();
  if (connect.id) {
    const userId = getAuthUserId(state);
    dispatch({
      type: 'SET_WS_CONNECT',
      payload: {
        connectId: connect.id,
        userId,
      },
    })
  }
};

export const sendMessageForWs = (message: string) => (dispatch: Function, getState: Function) => {
  const state = getState();
  const userId = getAuthUserId(state);
  const newCoord = getCoordinates(state);
  console.log('newCoord', newCoord);
  ws.wsOnmessage(userId, newCoord);
};
// console.log('connect', connect);
// 

// import { find } from 'lodash';
// import { GET_ACTUAL_MAP_COORD, GET_START_USER_COORD } from './map-page-constants';
// import { getAllUsers } from '@/modules/users';
// import { RECEIVER_PAGE_STORE_KEY, getActiveUserId } from '@/pages/receiver-page';

// // получение координат с сервера
// export const getGPSCoord = (coordinates) => (dispatch) => {
//   const newCoord = {
//     lat: coordinates.lat + 0.01,
//     lon: coordinates.lon + 0.01,
//   };
//   dispatch({
//     type: GET_ACTUAL_MAP_COORD,
//     payload: newCoord,
//   });
// };

// // солучение начальных координат 
// export const getStartUserCoordinater = () => (dispatch, getState) => {
//   const user = find(getAllUsers(getState()), { id: getActiveUserId(getState())});
//   dispatch({
//     type: GET_START_USER_COORD,
//     payload: user.coordinates,
//   });
// };

// export const SET_USER_ONLINE = `${USER_STORE_KEY}/SET_CURRENT_POSITION`;
