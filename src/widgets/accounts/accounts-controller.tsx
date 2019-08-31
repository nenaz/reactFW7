import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Accounts } from './accounts';
import { fetchAccountsData } from './accounts-actions';
import { IFetchAccountData } from './accounts-types';
import { getAccountsData } from './accounts-selectors';

interface IAccountControllerComponent {
  fetchAccountsData: () => IFetchAccountData[],
  accountsData: IFetchAccountData[],
};

class AccountControllerComponent extends React.PureComponent<IAccountControllerComponent> {
  componentDidMount() {
    this.props.fetchAccountsData();
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
  fetchAccountsData,
};

export const AccountsController = connect(
  mapStateToProps, mapDispatchToProps,
// @ts-ignore
)(AccountControllerComponent);
