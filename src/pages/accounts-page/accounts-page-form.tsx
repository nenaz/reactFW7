import * as React from 'react';
import { reduxForm } from 'redux-form';
import { AccountsPage } from './accounts-page';

interface IAccountsPageFormComponent {};

export class AccountsPageFormComponent extends React.PureComponent<IAccountsPageFormComponent> {
  render() {
    return (
      <AccountsPage {...this.props}/>
    );
  }
}

export const AccountsPageForm = reduxForm({
  form: 'accounts-view',
  // initialValues: {
  //   login: 'nenaz',
  //   password: '4276',
  // },
  enableReinitialize: true,
// @ts-ignore
})(AccountsPageFormComponent);