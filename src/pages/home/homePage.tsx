import * as React from 'react';
import { Page, Navbar, Link } from 'framework7-react';

interface IHomePage {};

export class HomePage extends React.PureComponent<IHomePage> {
  render() {
    return (
      <Page name="home">
        <Navbar title="Home Page" backLink="Back" />
        ...
        <Link href="/about/">About Page</Link>
        <Link href="/login/">Login Page</Link>
      </Page>
    );
  }
}
