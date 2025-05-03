import { useState } from "react";

export default function Counter() {
    // let count = 1

    let [count, counter] = useState(0)
    const add = () => {
        counter(count + 1)
    }

    const sub = () => {
        counter(count--)
    }
    return (
        <>
        <p>this Counter program</p>
        <p>Count is {count}</p>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>
        </>
    )
}