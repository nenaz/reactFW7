import * as React from 'react';
// import { connect } from 'react-redux';
import { AuthPage } from './auth-page';
import { windowPopup, closeWindow } from './auth-page-popup-window';

interface IAuthPageController {
  path: string,
};

export class AuthPageController extends React.PureComponent<IAuthPageController> {
  handleAuth = () => {
    console.log('handleAuth');
    windowPopup();
  };

  handlePopupClose = () => {
    closeWindow();
  };
  
  render() {
    return (
      <AuthPage handleAuth={this.handleAuth} path="/" />
    );
  }
}

// const mapStateToProps = create
// const mapDispatchToProps = {};

// export const AuthPageController = connect(
//   null, mapDispatchToProps,
// )(AuthPageComponent);