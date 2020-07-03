import React, { useContext, useState } from 'react';

import './AddTransaction.scss';
import { GlobalContext } from '../../Context/GlobalState';

export const AddTransaction = () => {
  const [text, changeText] = useState('');
  const [amount, changeAmount] = useState('');
  const { addTransaction, transactions } = useContext(GlobalContext);

  const onSubmitForm = e => {
    e.preventDefault();
    // addTransaction
    if(!text || !amount) {
      return;
    }
    const newTransaction = {
      id: parseInt(transactions[transactions.length - 1].id) + 1,
      text,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
    changeText('');
    changeAmount('');
  }
  return (
    <div className='add-transaction-section'>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmitForm}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input
          type="text"
          id="text"
          placeholder="Enter transaction name"
          value={text}
          onChange={e => changeText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="amount-label" htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={e => changeAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
