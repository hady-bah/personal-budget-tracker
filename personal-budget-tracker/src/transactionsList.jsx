import React from "react";
import './list.css';

export default function TransactionsList({ transactions, onDelete }) {
  const { amount, description, date } = transactions;

  const handleDelete = () => {
    onDelete(transactions); // Pass the transaction to the onDelete handler
  };

  return (
    <div id="list">
      <p id="amount">
        $ {amount} <span className="date">{date}</span>
        <button id="delete" onClick={handleDelete}>X</button>
      </p>
      <p id="description">{description}</p>
    </div>
  );
}


