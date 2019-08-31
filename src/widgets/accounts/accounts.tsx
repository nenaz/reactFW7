import * as React from 'react';
import cn from 'classnames';
import {
  Block,
  Row,
  Col,
  BlockTitle,
} from 'framework7-react';
import { map } from 'lodash';
import { Widget } from '@/components/widget';
import { SquareBlock, SquareAddBlock } from '@/components/square-blocks';
import accounts from './accounts.module.scss';
import { IFetchAccountData } from './accounts-types';

interface IAccounts {
  accountsData: IFetchAccountData[],
};

export class Accounts extends React.PureComponent<IAccounts> {
  render() {
    const { accountsData } = this.props;
    return (
      <Widget className={accounts.wrapper}>
        <BlockTitle>ACCOUNTS</BlockTitle>
        <div className={accounts['wrapper__parent-block']}>
          {map(accountsData, (accountData: IFetchAccountData) => {
            const { id, name, balance } = accountData;
            return (
              <SquareBlock
                key={id}
                name={name}
                balance={balance}
              />
            );
          })}
          <SquareAddBlock />
        </div>
      </Widget>
    );
  }
}