import * as React from 'react';
import {
  Page,
  Navbar,
  Block,
  Button,
  Link,
} from 'framework7-react';
import FontAwesome from 'react-fontawesome';
import './auth-page.scss'; 

const onSubmit = () => {
  console.log('onSubmit');
};

interface IAuthPage {
  handleAuth: () => void,
  path: string,
};

export class AuthPage extends React.PureComponent<IAuthPage> {
  render() {
    const { handleAuth } = this.props;

    return (
      <Page name="login" >
        <Navbar title="Авторизация" />
        <Block>
          <Button href="/home/" raised fill>Войти</Button>
        </Block>
      </Page>
    );
  }
}
