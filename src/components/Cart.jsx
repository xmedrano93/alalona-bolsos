import { useContext } from "react";
import { Store } from "../store/CartContext";
import {Link} from 'react-router-dom'

const Cart = () =>{
    const [data, setData] = useContext(Store);

    const clear = () =>{ setData({
        cantidad: 0,
        items: [],
        precioTotal: 0,
    }) }
    const removeItems = productId =>{const productoFuera = data.items.filter(prod => prod.id !== productId);
        const productoEliminado = data.items.filter(itemEliminado => itemEliminado.id === productId);
        const cantidadEliminada = productoEliminado.map(item => item.qtyUn)
        const totalEliminado = productoEliminado.map(item => item.qtyUn * item.price)
        console.log(totalEliminado)
        setData({items: productoFuera,
                cantidad: data.cantidad - cantidadEliminada,
                precioTotal: data.precioTotal - totalEliminado,
        })
    }
     
    if(data.items?.length){
    return(
    <>   
        
            <div className="container">
             {data.items?.map(item => 
                                        <div className="row" key={item.id}>
                                            <div className="d-flex flex-row">
                                                <div>
                                                    <img className="rounded mt-2 mr-3" style={{width:'20vw'}} src={`/images/${item.imgUrl}`} alt={'item.title'} />
                                                </div>
                                                <div>
                                                    <h3 className='text-center'>{item.title}</h3>
                                                    <h4>Precio por unidad: ${item.price}</h4>
                                                    <h5>Cantidad:{item.qtyUn}</h5>
                                                    <h5>Precio total Item: ${item.qtyUn * item.price}</h5>
                                                    <button className='btn btn-danger' onClick={()=> removeItems(item.id)}>Borrar este item</button>
                                                </div>
                                            </div>

                                        </div> )}
                </div>
        
       <div className="container text-center">
        <button className="btn btn-danger mt-2" onClick={clear}>Borrar todos los items</button>
       </div>
       <div className='text-center'>
            <h3>El total de la compra es ${data.precioTotal}</h3>
       </div>
       <div className="text-center">
        <Link to='/checkout'> <button className="btn btn-primary">Finalizar compra</button>  </Link>
       </div>
        
    </>
    )}else{
        return(
            <h2 className="text-center">El carro está vacío, por favor elige un producto</h2>        )
    }
}
export default Cart;