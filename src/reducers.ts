import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ACCOUNTS_WIDGET_STORE_KEY, accountsWidgetReducer } from './widgets/accounts';

export interface IApplicationState {

};

export const reducers = combineReducers({
  form: formReducer,
  [ACCOUNTS_WIDGET_STORE_KEY]: accountsWidgetReducer,
});
