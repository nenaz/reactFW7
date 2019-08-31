import * as React from 'react';
import { Icon, Link } from 'framework7-react';
import styles from '../square-blocks.module.scss';

interface ISquareBlock {
  name: string,
  balance: string,
};

export class SquareBlock extends React.PureComponent<ISquareBlock> {
  render() {
    console.log('styles', styles);
    return (
      <div className={styles['square-block']} >
        <Link href="/account-view/" className={styles['square-block__link']}>
          <div>
            <span className={styles['square-block__account-title']}>
              Name account
            </span>
          </div>
          <div className={styles['square-block__account-icon']}>
            <Icon fa="cc-visa" className={styles['square-block__icon']} />
            {/* <Icon fa="cc-mastercard" /> */}
          </div>
          <div>
            <span className={styles['square-block__account-balance']}>
              Account balance
            </span>
          </div>
        </Link> 
      </div>
    );
  }
}