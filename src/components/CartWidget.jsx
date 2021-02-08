import '../styles/CartWidget.css'
import carrito from "../assets/carro.png"
import {useContext} from 'react'
import {Store} from '../../src/store/CartContext'


function CartWidget (){
    const [data] = useContext(Store);

    return (
        <>
        <div className='cart'>
            <img alt="carrito"src={carrito}></img>
            <span className='cart_menu_num"'>{data.cantidad}</span>
        </div>
            
        </>
    )
}

export default CartWidget;