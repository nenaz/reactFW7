import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ACCOUNTS_WIDGET_STORE_KEY, accountsWidgetReducer } from './widgets/accounts';
import { RECEIVER_PAGE_STORE_KEY, ReceiverPageReducer } from './pages/receiver-page';
import { USER_STORE_KEY, coordinatesReducer } from './modules/coordinates';

export interface IApplicationState {

};

export const reducers = combineReducers({
  form: formReducer,
  [ACCOUNTS_WIDGET_STORE_KEY]: accountsWidgetReducer,
  [RECEIVER_PAGE_STORE_KEY]: ReceiverPageReducer,
  [USER_STORE_KEY]: coordinatesReducer,
});
