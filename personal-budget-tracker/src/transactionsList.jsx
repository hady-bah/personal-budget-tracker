import React from "react";
import './list.css'

export default function TransactionsList({transactions}){

    const {
        amount,
        description,
        date,
    } = transactions;

    return(
        <div id ="list">
            <p id ="amount">$ {amount} <span className="date">{date}</span></p>
            <p id ="description">{description}</p>
        </div>
    );
}