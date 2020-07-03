import React, { Fragment, useContext } from 'react';

import './TransactionList.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { Transaction } from '../Transaction/Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className='history-section'>
      <h3>History</h3>
      <ul id="list" className="list">
        {
          transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id} />
          ))
        }
      </ul>
    </div>
  );
};
