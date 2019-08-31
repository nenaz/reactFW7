import { createSelector } from 'reselect';
import { get } from 'lodash';
import { ACCOUNTS_WIDGET_STORE_KEY } from './accounts-constants';

const getWidgetAccountsState = (state: any): any => state[ACCOUNTS_WIDGET_STORE_KEY];

export const getAccountsData = createSelector(
  getWidgetAccountsState,
  (accountsState: Object): Object => get(accountsState, 'accountsData'),
);
