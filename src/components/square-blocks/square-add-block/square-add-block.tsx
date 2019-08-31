import * as React from 'react';
import { Link } from 'framework7-react';
import styles from '../square-blocks.module.scss';

interface ISquareAddBlock {};

export class SquareAddBlock extends React.PureComponent<ISquareAddBlock> {
  render() {
    console.log('styles', styles);
    return (
      <div className={styles['square-block']} >
        <Link href="/account-new/" className={styles['square-block__link']}>
          <span className={styles['square-block__add-symbol']}>+</span>
        </Link> 
      </div>
    );
  }
}