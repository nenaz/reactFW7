import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AccountsPageForm } from './accounts-page-form';

interface IAccountViewForm {};

class AccountsPageComponent extends React.PureComponent<IAccountViewForm> {
  render() {
    return (
      <AccountsPageForm {...this.props} />
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {};

export const AccountsPageController = connect(
  mapStateToProps, mapDispatchToProps,
)(AccountsPageComponent);
