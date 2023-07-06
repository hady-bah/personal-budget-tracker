import React, { useState } from "react";
import './list.css';
import { MdDeleteForever } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import {RiSave3Fill} from "react-icons/ri"
import {FcCancel} from "react-icons/fc"

export default function TransactionsList({ transactions, onDelete }) {
  const { id, amount, description, date } = transactions;
  const [isEditing, setIsEditing] = useState(false);
  const [editedAmount, setEditedAmount] = useState(amount);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDate, setEditedDate] = useState(date);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const editedTransaction = {
      id,
      amount: editedAmount,
      description: editedDescription,
      date: editedDate,
    };

    try {
      // Make an API call to save the edited transaction
      const response = await fetch(`http://localhost:8000/transactions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedTransaction),
      });

      if (!response.ok) {
        throw new Error("Failed to save transaction");
      }

      // Update the state or perform any necessary actions after successful save

      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedAmount(amount);
    setEditedDescription(description);
    setEditedDate(date);
  };

  return (
    <div id="list">
      {isEditing ? (
        <>
          <input id="editinputAmount" type="text" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
          <input id="editinputDesc" type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
          <input id="editinputDate" type="text" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
          <button id ="save" onClick={handleSave}>
            <RiSave3Fill style={{ fontSize: "22px" }}/>
          </button>
          <button id ="cancel" onClick={handleCancel}>
            <FcCancel style={{ fontSize: "22px" }}/>
          </button>
        </>
      ) : (
        <>
          <p id="amount">
            $ {amount} <span className="date">{date}</span>
            <button id="edit" onClick={handleEdit}>
              <FiEdit style={{ fontSize: "22px" }} />
            </button>
            <button id="delete" onClick={handleDelete}>
              <MdDeleteForever style={{ fontSize: "22px" }} />
            </button>
          </p>
          <p id="description">{description}</p>
        </>
      )}
    </div>
  );
}






