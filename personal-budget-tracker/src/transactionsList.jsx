import React from "react";
import './list.css'

export default function TransactionsList({transactions}){

    const {
        amount,
        description,
    } = transactions;

    return(
        <div id ="list">
            <p id ="amount">$ {amount}</p>
            <p id ="description">{description}</p>
        </div>
    );
}