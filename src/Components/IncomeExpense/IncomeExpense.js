import React, { useContext } from 'react';

import './IncomeExpense.scss';
import { GlobalContext } from '../../Context/GlobalState';

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  let totalIncome = 0;
  let totalExpense = 0;
  transactions.forEach((transaction) => {
    if(transaction.amount >= 0) {
      totalIncome += transaction.amount;
    } else {
      totalExpense += transaction.amount;
    }
  });
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">+${totalIncome.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">-${Math.abs(totalExpense).toFixed(2)}</p>
      </div>
    </div>
  );
};
