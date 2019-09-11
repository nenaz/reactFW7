import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Accounts } from './accounts';
import { fetchAccounts } from './accounts-actions';
import { IFetchAccountData } from './accounts-types';
import { getAccountsData } from './accounts-selectors';

interface IAccountControllerComponent {
  accountsData: IFetchAccountData[],
  fetchAccounts: Function,
};

class AccountControllerComponent extends React.PureComponent<IAccountControllerComponent> {
  componentDidMount() {
    this.props.fetchAccounts();
  }
  
  render() {
    return (
      <Accounts
        accountsData={this.props.accountsData}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  accountsData: getAccountsData,
});

const mapDispatchToProps = {
  fetchAccounts,
};

export const AccountsController = connect(
  mapStateToProps, mapDispatchToProps,
// @ts-ignore
)(AccountControllerComponent);
