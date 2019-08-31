import { IFetchAccountData } from './accounts-types';
import { ACCOUNTS_WIDGET_STORE_KEY } from './accounts-constants';
// import { ThunkAction } from 'redux-thunk';

export const SET_WIDGET_ACCOUNTS_DATA = `${ACCOUNTS_WIDGET_STORE_KEY}/SET_WIDGET_ACCOUNTS_DATA`;

export const fetchAccountsData = () => (
  dispatch: Function,
): any => {
  const accountsData = [
    {
      id: '1',
      name: 'test-1',
      createDate: '30.08.2019',
      endDate: '30.08.2020',
      balance: '10000.00',
      type: '1',
      history: {},
    },
    {
      id: '2',
      name: 'test-2',
      createDate: '30.10.2019',
      endDate: '30.10.2020',
      balance: '20000.00',
      type: '2',
      history: {},
    },
  ];

  console.log('accountsData', accountsData);
  dispatch({
    type: SET_WIDGET_ACCOUNTS_DATA,
    payload: accountsData,
  });
}
