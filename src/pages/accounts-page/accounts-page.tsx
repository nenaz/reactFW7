import * as React from 'react';
import {
  Page,
  Navbar, 
  List,
  ListInput,
  Icon,
} from 'framework7-react';
import { ReduxFormTextInput } from '@/components/fields/text-input-field';

interface IAccountPage {};

export class AccountsPage extends React.PureComponent<IAccountPage> {
  render() {
    return (
      <Page name="Account">
        <Navbar title="Account" backLink />
        <ReduxFormTextInput
          name='login'
          placeholder='Логин'
        />
        <List noHairlinesMd>
          <ListInput
            placeholder='ghjghj'
            label="Name"
            type="text"
            floatingLabel
            // clearButton
            {...this.props}
          ><Icon icon="demo-list-icon" slot="media"/></ListInput>
        </List>
      </Page>
    );
  }
}