import React, { useMemo, useState } from 'react'

function Usememo() {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const multiplication = useMemo(
        function multiply() {
            console.log("*********");
            
            return add * 10;
        },
        [add]
    );
  return (
    <div>
        <p>Multiply: {multiplication}</p>

        <h2>UseMemo</h2>

        <p>Add: {add}</p>
        <button
            onClick={() => {
                setAdd(add + 1);
            }}
            >
                Add
        </button>

        <p>Minus : {minus}</p>
        <button
        onClick={() =>{
            setMinus(minus - 1);
        }}
        >
         Minus
        </button>
        </div>
  )
}

export default Usememo