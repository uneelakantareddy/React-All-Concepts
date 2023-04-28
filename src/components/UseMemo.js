import React, { useState, useMemo } from "react";

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const factorial = useMemo(() => {
        function calculateFactorial(num) {
            if (num === 0 || num === 1) {
                return 1;
            } else {
                return num * calculateFactorial(num - 1);
            }
        }
        return calculateFactorial(number);
    }, [number]);
    return (
        <div>
            <h1>{factorial}</h1>
            <input
                type="number"
                value={number}
                placeholder="Enter the value here"
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <button onClick={() => {}}>Re-render</button>
        </div>
    );
};

export default UseMemo;
