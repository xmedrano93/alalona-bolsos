import { useContext } from "react";
import { Store } from "../store/CartContext";

const Cart = () =>{
    const [data, setData] = useContext(Store);
    const clear = () =>{ setData({
        cantidad: 0,
        items: [],
    }) }
    const removeItem = (asd)=>{
       console.log(data.items)

    // const deleteProductCart = setData.items.slice(data.items.id,1);
    // setData(...data.items, deleteProductCart)
    // console.log(data.items)
    }
    console.log(data.items)
    return(
    <>    
        <h2>Estamos en el Cart</h2>
        {
            data.items?.map(item => 
                                        <div key={item.id}>
                                            <h3>{item.title}</h3>
                                            <h4>${item.price}</h4>
                                            <h5>Cantidad:{item.qtyUn}</h5>
                                            <button onClick={() =>removeItem(item.id)}>Borrar este item(id{item.id})</button>
                                        </div> )
                                    
        }
      
        <button onClick={clear}>Borrar todos los items</button>

        
    </>
    )
}
export default Cart;