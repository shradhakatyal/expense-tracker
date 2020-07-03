import React, { Fragment, useState } from 'react';

import './AddTransaction.scss';

export const AddTransaction = () => {
  const [text, changeText] = useState('');
  const [amount, changeAmount] = useState('');
  return (
    <div className='add-transaction-section'>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
          type="text"
          id="text"
          placeholder="Enter transaction label"
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
