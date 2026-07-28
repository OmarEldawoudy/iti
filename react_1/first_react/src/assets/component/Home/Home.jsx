import HomeStyle from "./Home.module.css";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("omar");
    function change()
    {
        setName(name);
    }


    const [counter, setCounter] = useState(0);
    function increase() {
        setCounter(counter + 1);
    }

    return (
        <>
            <h3 className="text-center"> Hello: {name}</h3>
            <h3 className="text-center"> Count: {counter}</h3>
            <button className="btn btn-primary"onClick={increase} >Increase</button>
        </>
    );
}
