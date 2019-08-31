import * as React from 'react';
import { omit } from 'lodash';
import {
  F7Navbar,
  F7NavLeft,
  F7NavTitle,
  F7NavRight,
  Button,
} from 'framework7-react';

interface INavbar {
  title?: string,
  showMenu?: boolean,
  backLink?: boolean,
  backLinkUrl?: string,
};

export class Navbar extends React.PureComponent<INavbar> {
  renderNavLeft = () => {
    if (this.props.showMenu) {
      return <Button small panelToggle="left" className="display-flex" iconFa="bars" />
    }
    // if (this.props.backLink) {
    //   return <Button small panelToggle="left" className="display-flex" iconFa="bars" />
    // }
    return null;
  };

  render() {
    const { title, backLinkUrl = '', backLink } = this.props;
    console.log('backLinkUrl', backLinkUrl);

    return (
      <F7Navbar {...omit(this.props, 'title')}>
        <F7NavLeft backLinkUrl={backLinkUrl} backLink={backLink}>
          {this.renderNavLeft()}
        </F7NavLeft>
        <F7NavTitle>{title}</F7NavTitle>
        <F7NavRight></F7NavRight>
      </F7Navbar>
    );
  }
}