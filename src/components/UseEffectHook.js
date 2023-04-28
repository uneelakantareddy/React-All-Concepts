import React, { useEffect, useState } from "react";
import axios from "axios";
const UseEffectHook = () => {
    const [data, setData] = useState("");
    useEffect(() => {
        async function makeApi() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(response.data);
        }

        makeApi();
    });
    return (
        <div>
            {data.map((item, index) => (
                <div>{item.name}</div>
            ))}
        </div>
    );
};

export default UseEffectHook;
