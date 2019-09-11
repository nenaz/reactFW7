import { Dispatch } from 'redux';
import { Send } from '@/utils/server-interaction';
import { IApplicationState } from '@/reducers';
import { IFetchAccountData } from './accounts-types';
import { ACCOUNTS_WIDGET_STORE_KEY } from './accounts-constants';
import { getFormData } from './accounts-selectors';

export const SET_WIDGET_ACCOUNTS_DATA = `${ACCOUNTS_WIDGET_STORE_KEY}/SET_WIDGET_ACCOUNTS_DATA`;

export const fetchAccounts = () => (
  dispatch: Dispatch,
  getState: () => IApplicationState
) => {
  return Send('getAccounts')
    .then((response: any) => {
      dispatch({
        type: SET_WIDGET_ACCOUNTS_DATA,
        payload: response,
      });
    })
};

export const saveAccountsData = () => (
  dispatch: Dispatch,
  getState: () => IApplicationState,
) => {
  const state = getState();
  const values = getFormData(state, { formName: 'accounts' });
  console.log('values', values);
};
