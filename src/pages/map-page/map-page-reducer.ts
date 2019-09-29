// import { GET_ACTUAL_MAP_COORD, GET_START_USER_COORD } from './map-page-constants';

const INITIAL_STATE = {
//   isOnline: false,
//   coordinates: {
//     lat: 0,
//     lon: 0,
//   },
};

// export const MapPageReducer = (state = INITIAL_STATE, action: any) => {
//   const { type, payload } = action;
//   switch (type) {
//     // case GET_ACTUAL_MAP_COORD:
//     case 'USER_ONLINE':
//       return ({
//         ...state,
//         isOnline: payload,
//       });
//     default:
//       return state;
//   }
// };


export const MapPageReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action;
  
  switch(type) {
    case 'SET_WS_CONNECT': return ({
      ...state,
      [payload.userId]: { ...payload },
    });
    default: return state;
  }
};