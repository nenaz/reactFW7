import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ACCOUNTS_WIDGET_STORE_KEY, accountsWidgetReducer } from './widgets/accounts';
import { RECEIVER_PAGE_STORE_KEY, ReceiverPageReducer } from './pages/receiver-page';
import { USER_STORE_KEY, coordinatesReducer } from './modules/coordinates';
import { AUTH_STORE_KEY, authReducer } from './modules/auth';
import { MAP_PAGE_STORE_KEY, MapPageReducer } from './pages/map-page';

export interface IApplicationState {

};

export const reducers = combineReducers({
  form: formReducer,
  [ACCOUNTS_WIDGET_STORE_KEY]: accountsWidgetReducer,
  [RECEIVER_PAGE_STORE_KEY]: ReceiverPageReducer,
  [USER_STORE_KEY]: coordinatesReducer,
  [AUTH_STORE_KEY]: authReducer,
  [MAP_PAGE_STORE_KEY]: MapPageReducer,
});
