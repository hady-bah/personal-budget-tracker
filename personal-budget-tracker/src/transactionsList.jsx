import React from "react";
import './list.css';
import {MdDeleteForever} from "react-icons/md"
import {FiEdit} from "react-icons/fi"

export default function TransactionsList({ transactions, onDelete }) {
  const { amount, description, date } = transactions;

  const handleDelete = () => {
    onDelete(transactions); 
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div id="list">
      <p id="amount">
        $ {amount} <span className="date">{date}</span>
        <button id="edit" onClick={handleEdit}>
          <FiEdit style={{ fontSize: "22px" }}/>
        </button>
        <button id="delete" onClick={handleDelete}>
          <MdDeleteForever style={{ fontSize: "22px" }}/>
        </button>
      </p>
      <p id="description">{description}</p>
    </div>
  );
}


