import * as React from 'react';
import { Accounts } from '@/widgets/accounts';
import { Balance } from '@/widgets/balance';
import { Statement } from '@/widgets/statement';

export const HOME_PAGE_WIDGETS_LIST = [
  { component : <Accounts /> },
  { component : <Balance /> },
  { component : <Statement /> },
];