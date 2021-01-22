import {useState, useContext} from 'react'
import {Store} from '../../src/store/CartContext'
import {getFirestore} from '../firebase/Firebase'
import firebase from 'firebase/app';

const Checkout = ()=>{
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, completoVenta] = useState(false);
    const [idCompra, setIdCompra]= useState('');
    const [formData, setFormData] = useState({
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        tarjeta:'',
        vencimiento:'',
        seguridad:'',
    })
  

    const compra = {
        user: formData,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }
    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));
    }

    return(
        <>
        <h3>Estamos en el Checkout</h3>
        <div className="container">

                <form onSubmit={handleSubmitForm}>
                    <div className="form-group">
                        <input className='form-control' value={formData.nombre} type="text" name="nombre" onChange={handleChangeInput} placeholder="Nombre" />
                    </div>
                    <div className="form-group">
                        <input className='form-control' value={formData.apellido} type="text" name="apellido" onChange={handleChangeInput} placeholder="Apellido" />   
                    </div>
                    <div className='from-group'>
                        <input className='form-control' value={formData.email} type="email" name="email" onChange={handleChangeInput} placeholder="E-mail" />
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' value={formData.telefono} type="tel" name="telefono" onChange={handleChangeInput} placeholder="Teléfono" />
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' value={formData.tarjeta} type="tel" name="tarjeta" onChange={handleChangeInput} placeholder="Ingrese los 16 números de su tarjeta" />
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' value={formData.vencimiento} type="tel" name="vencimiento" onChange={handleChangeInput} placeholder="Ingrese la fecha de vencimiento" />
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' value={formData.seguridad} type="tel" name="seguridad" onChange={handleChangeInput} placeholder="Ingrese el código de seguridad" />
                    </div>
                    <div className='form-group text-center m-3' >
                        <button  style={{width:"30vw"}} className='btn btn-primary'>Pagar</button>
                    </div>

                   
                </form>
                <p>La compra se realizó correctamente, tu número de seguimiento es: {idCompra}</p>
            </div>
        </>
    )
}

export default Checkout;