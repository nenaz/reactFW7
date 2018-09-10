import * as React from 'react';
import { Page, Navbar, Block } from 'framework7-react';
import { BaseInput as Input } from '../../components/inputs/base-input';

export const WelcomePage = () => (
  <Page name="welcome">
    <Navbar title="welcome" />
    <Block>
      <Input
        floating
        type="tel"
        placeholder="Your phone number"
        clearButton
      />
    </Block>
  </Page>
)