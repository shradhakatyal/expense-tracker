import React, { useContext, useEffect } from 'react';

import './TransactionList.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { Transaction } from '../Transaction/Transaction';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  
  useEffect(() => {
    getTransactions();
  }, []);
  
  console.log(transactions);
  return (
    <div className='history-section'>
      <h3>History</h3>
      <ul id="list" className="list">
        {
          transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction._id} />
          ))
        }
      </ul>
    </div>
  );
};
