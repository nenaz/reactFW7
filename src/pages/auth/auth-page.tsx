import * as React from 'react';
import {
  // Page,
  // Navbar,
  Block,
  Button,
  Link,
} from 'framework7-react';
// import FontAwesome from 'react-fontawesome';
import { Page } from '@/components/page';
import styles from './auth-page.module.scss';

console.log('authPage', styles);

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
      <Page name="login" title="Авторизация">
        <Block className={styles['auth-page-block']}>
          <Button href="/home/" raised fill>Войти</Button>
        </Block>
      </Page>
    );
  }
}
