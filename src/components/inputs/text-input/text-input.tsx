import * as React from 'react';
import { ListInput, List, Icon } from 'framework7-react';

interface ITextInput {
  className?: string,
  placeholder?: string,
};

export class TextInput extends React.PureComponent<ITextInput> {
  render() {
    const { className, placeholder } = this.props;

    return (
      <List noHairlinesMd>
        <ListInput
          className={className}
          placeholder={placeholder}
          label={placeholder}
          type="text"
          floatingLabel
          {...this.props}
        ><Icon icon="demo-list-icon" slot="media"/></ListInput>
      </List>
    );
  }
}
