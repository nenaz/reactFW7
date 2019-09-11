import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from 'framework7-react';
import { compose } from 'redux';
import { get } from 'lodash';
import { AccountsPageForm } from './accounts-page-form';
import { ACCOUNTS_TYPE_VIEW } from '@/widgets/accounts/accounts-constants';
import { getAccountData } from '@/widgets/accounts/accounts-selectors';
import { saveAccount } from './accounts-page-actions';

interface IAccountViewForm {
  match: any,
  f7route: {
    query: {
      type: string,
    },
  },
  saveAccount: Function,
};

class AccountsPageComponent extends React.PureComponent<IAccountViewForm> {
  handleSaveAccount = () => {
    this.props.saveAccount();
    // @ts-ignore
    this.$f7router.back();
  };

  handleDeleteAccount = () => {
    // @ts-ignore
    this.$f7.dialog.confirm('Are you feel good today?', () => {
      // @ts-ignore
      this.$f7router.back();
    });
  };

  createRightPart = () => {
    const type = get(this.props, 'f7route.query.type', '');
    console.log('this.props', this.props);
    console.log('type', type);
    return (
      <React.Fragment>
        {type === ACCOUNTS_TYPE_VIEW && (
          <Button
            small
            className="display-flex margin-left-half"
            iconFa="trash"
            iconColor="red"
            outline
            onClick={this.handleDeleteAccount}
          />
        )}
        <Button
          small
          className="display-flex margin-left-half"
          iconFa="check"
          outline
          iconColor="green"
          onClick={this.handleSaveAccount}
        />
      </React.Fragment>
    );
  }

  render() {
    return (
      // @ts-ignore
      <AccountsPageForm
        createRightPart={this.createRightPart}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  initialValues: getAccountData,
});

const mapDispatchToProps = {
  saveAccount,
};

export const AccountsPageController = compose(
  connect(
    mapStateToProps, mapDispatchToProps,
  ),
)(AccountsPageComponent);
