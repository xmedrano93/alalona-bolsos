import {Store} from '../store/CartContext'
import {useState, useContext} from "react";


function ItemCount ({stock}) {
    const [count, setCount] = useState (0)


    const add = () =>{
        if(count < stock){
        setCount (count + 1) ;

    }
}
    const less = () =>{
        if(count > 0){
        setCount (count-1);
    }
}
    return(
        <>
            <div>
                <button onClick={less} className="btn btn-light">-</button>
                <p className="d-inline-block m-3 pl-4 pr-4" >{count}</p>
                <button onClick={add} className="btn btn-light">+</button>

            </div>
            
        </>
    )
}

export default ItemCount;