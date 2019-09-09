import { IFetchAccountData } from './accounts-types';
import { ACCOUNTS_WIDGET_STORE_KEY } from './accounts-constants';
import { getFormData } from './accounts-selectors';

export const SET_WIDGET_ACCOUNTS_DATA = `${ACCOUNTS_WIDGET_STORE_KEY}/SET_WIDGET_ACCOUNTS_DATA`;

export const fetchAccountsData = () => (
  dispatch: Function,
): any => {
  const accountsData: IFetchAccountData[] = [
    {
      id: '1',
      name: 'test-1',
      createDate: '30.08.2019',
      endDate: '30.08.2020',
      balance: '10000.00',
      type: '1',
      history: {},
      number: '48021810271000',
      hide: false,
    },
    {
      id: '2',
      name: 'test-2',
      createDate: '30.10.2019',
      endDate: '30.10.2020',
      balance: '20000.00',
      type: '2',
      history: {},
      number: '480218102719999',
      hide: false,
    },
  ];

  dispatch({
    type: SET_WIDGET_ACCOUNTS_DATA,
    payload: accountsData,
  });
}

export const saveAccountsData = () => (
  dispatch: Function,
  getState: Function,
) => {
  const state = getState();
  const values = getFormData(state, { formName: 'accounts' });
  console.log('values', values);
};
