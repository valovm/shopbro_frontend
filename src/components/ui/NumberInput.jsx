import React, { useState } from 'react';
import Button from "./Button";

function NumberInput({value = 0, onDecrease = null, onIncrease = null}) {

    const increment = () => {
        if(onIncrease) { onIncrease(value + 1) }

    };

    const decrement = () => {
        if(onDecrease) { onDecrease(value - 1) }
    };

    return (
        <div className="d-inline-flex">
            <Button onClick={decrement}>-</Button>
            <span>{value}</span>
            <Button onClick={increment}>+</Button>
        </div>
    );
}

export default NumberInput;
