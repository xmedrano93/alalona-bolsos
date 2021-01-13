import { useContext } from "react";
import { Store } from "../store/CartContext";

const Cart = (id) =>{
    const [data, setData] = useContext(Store);
    const clear = () =>{ setData({
        cantidad: 0,
        items: [],
    }) }
    console.log(data.items.length)
    console.log(data.items[{id}])
    const removeItem= ()=>{
        console.log(data.items.id)
        console.log(data.items )
        setData({
            items: [...data.items].splice(),
            
        })

    }

    return(
    <>    
        <h2>Estamos en el Cart</h2>
        {
            data.items?.map(item => 
                                        <div key={item.id}>
                                            <h3>{item.title}</h3>
                                            <h4>${item.price}</h4>
                                            <h5>Cantidad:{item.qtyUn}</h5>
                                            <button onClick={removeItem}>Borrar este item(id{item.id})</button>
                                        </div> )
                                    
        }
      
        <button onClick={clear}>Borrar todos los items</button>

        
    </>
    )
}
export default Cart;