import { useContext } from "react";
import { Store } from "../store/CartContext";
import {Link} from 'react-router-dom'

const Cart = () =>{
    const [data, setData] = useContext(Store);
    const clear = () =>{ setData({
        cantidad: 0,
        items: [],
    }) }
    const removeItems = productId =>{const productoFuera = data.items.filter(prod => prod.id !== productId);

        setData({items: productoFuera,
                cantidad: data.cantidad - data.items[productId]?.qtyUn})
    
        console.log(data.items[productId]?.qtyUn)
    }
        console.log(data)
    if(data.items.length){
    return(
    <>   
        {
             data.items?.map(item => 
                                        <div className="container" key={item.id}>
                                            <div>
                                                <img className="rounded mt-2" style={{width:'20vw'}} src={`/images/${item.imgUrl}`}/>
                                            </div>
                                            <div>
                                                <h3>{item.title}</h3>
                                                <h4>Precio por unidad: ${item.price}</h4>
                                                <h5>Cantidad:{item.qtyUn}</h5>
                                                <h5>Precio total Item: ${item.qtyUn * item.price}</h5>
                                                <button onClick={()=> removeItems(item.id)}>Borrar este item</button>
                                            </div>
                                            

                                        </div> )
        } 
       <div className="container">
        <button className="mt-2" onClick={clear}>Borrar todos los items</button>
       </div>
       <div className="text-center">
        <Link to='/checkout'> <button className="btn btn-primary">Finalizar compra</button>  </Link>
       </div>
        

        
    </>
    )}else{
        return(
            <h2 className="text-center">El carro está vacío, por favor elige un producto</h2>        )
    }

// else{
//         return(
//             <>   
//                 <h2>Estamos en el Cart</h2>
//                 {
//                      data.items?.map(item => 
//                                                 <div key={item.id}>
//                                                     <h3>{item.title}</h3>
//                                                     <h4>${item.price}</h4>
//                                                     <h5>Cantidad:{item.qtyUn}</h5>
//                                                     <button onClick={()=> removeItems(item.id)}>Borrar este item(id{item.id})</button>
//                                                 </div> )
//                 } 
               
//                 <button onClick={clear}>Borrar todos los items</button>
        
                
//             </>  
//         )
//     }
    
}
export default Cart;