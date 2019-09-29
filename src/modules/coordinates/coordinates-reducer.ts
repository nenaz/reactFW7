import { SET_CURRENT_POSITION, SET_USER_ONLINE } from "./coordinates-actions";

const INITIAL_STATE = {
  isOnline: false,
  coordinates: {
    lat: 0,
    lon: 0,
  },
};

export const coordinatesReducer = (state: any = INITIAL_STATE, action: any) => {
  const { type, payload } = action;

  switch(type) {
    case SET_CURRENT_POSITION: return ({
      ...state,
      coordinates: payload,
    });
    case SET_USER_ONLINE: return ({
      ...state,
      isOnline: payload,
    });
    default: return state;
  }
};