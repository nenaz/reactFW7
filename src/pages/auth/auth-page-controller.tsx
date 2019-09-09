import * as React from 'react';
import { connect } from 'react-redux';
import { goAuth } from '@/modules/auth';
import { AuthPage } from './auth-page';

interface IAuthPageController {
  path: string,
  goAuth: () => void,
};

export class AuthPageControllerComponent extends React.PureComponent<IAuthPageController> {
  handleAuth = async () => {
    const response = await this.props.goAuth();
    // @ts-ignore
    if (response) {
      // @ts-ignore
      this.$f7router.navigate({ name: 'home' });
    }
  };

  handlePopupClose = () => {
    // closeWindow();
  };
  
  render() {
    return (
      <AuthPage handleAuth={this.handleAuth} path="/" />
    );
  }
}

const mapDispatchToProps = {
  goAuth,
};

export const AuthPageController = connect(
  null, mapDispatchToProps,
)(AuthPageControllerComponent);