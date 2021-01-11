import { useContext, useState } from "react";
import { Store } from "../store/CartContext";
import ItemCount from '../components/ItemCount'

const Cart = (count) =>{
    const [data, setData] = useContext(Store);
    const clear = () =>{ setData({
        cantidad: [],
        items: [],
    }) }

    
    // setData({cantidad: [...cantidad]})
    console.log(data)

    return(
    <>    
        <h2>Estamos en el Cart</h2>
        {
            data.items?.map(item =>  
                                        <li key={item.id}>
                                            <h3>{item.title}</h3>
                                            <h4>${item.price}</h4>
                                            <ItemCount stock={item.stock}/>
                                        </li>)
                                    
        }{console.log(count)}
        <button onClick={clear}>Borrar todos los items</button>

        
    </>
    )
}
export default Cart;