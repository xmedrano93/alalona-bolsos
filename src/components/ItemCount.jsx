import {useState} from "react";

function ItemCount ({stock}) {

    const [count, setCount] = useState (0)
    const available = {stock}

    const add = () =>{
        if(count < stock){
        setCount (count + 1);
    }
}
    const less = () =>{
        if(count > 0){
        setCount (count-1);
    }
}

    return(
        <>
            <button onClick={add}>+</button>
            <p>{count}</p>
            <button onClick={less}>-</button>
        </>
    )
}

export default ItemCount;