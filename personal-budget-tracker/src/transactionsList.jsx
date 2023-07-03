import React from "react";
import './list.css';
import {MdDeleteForever} from "react-icons/md"

export default function TransactionsList({ transactions, onDelete }) {
  const { amount, description, date } = transactions;

  const handleDelete = () => {
    onDelete(transactions); 
  };

  return (
    <div id="list">
      <p id="amount">
        $ {amount} <span className="date">{date}</span>
        <button id="delete" onClick={handleDelete}>
          <MdDeleteForever style={{ fontSize: "18px" }}/>
        </button>
      </p>
      <p id="description">{description}</p>
    </div>
  );
}


