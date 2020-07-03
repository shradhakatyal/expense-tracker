import React, { Fragment, useContext } from 'react';

import './Balance.scss';
import { GlobalContext } from '../../Context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let total = 0;
  transactions.forEach((transaction) => {
    total += transaction.amount;
  });
  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total.toFixed(2)}</h1>
    </Fragment>
  );
};
