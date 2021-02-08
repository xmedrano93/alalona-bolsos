import {useState, useContext} from 'react'
import {Store} from '../../src/store/CartContext'
import {getFirestore} from '../firebase/Firebase'
import firebase from 'firebase/app';
import {NavLink} from 'react-router-dom'


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
        vencimientoAño:'',
        vencimientoMes:'',
        seguridad:'',
    })
  

    const compra = {
        user: formData,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        estado: 'Generada'
    }
    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleValidateEmail = (e)=>{
        if(formData.email !== e.target.value){
            [e.target.email]= e.target.value=''
            alert('No coinciden los emails, por favor reingrese')
        }
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(compra)
        .then(({id}) => {
            completoVenta(true);
            setIdCompra(id);
        })
        .catch(e => console.log(e));
        setData({
            items: [],
            cantidad:0,
            precioTotal:0,
        })
        
    }

    
    return(
        <>
        <h3 className='text-center'>Finalizá tu compra</h3>
        <div className="container">

                <form className='form' onSubmit={handleSubmitForm}>
                    <div className="form-group">
                        <input className='form-control' value={formData.nombre} type="text" name="nombre" onChange={handleChangeInput} placeholder="Ingrese su nombre" pattern='[aA-zZ]{2,60}' required/>
                    </div>
                    <div className="form-group">
                        <input className='form-control' value={formData.apellido} type="text" name="apellido" onChange={handleChangeInput} placeholder="Ingrese su apellido" pattern='[aA-zZ]{2,60}' required/>   
                    </div>
                    <div className='from-group d-flex flex-row'>
                        <div className='col-6 pl-0'>
                            <input className='form-control' value={formData.email} type="email" name="email" onChange={handleChangeInput} placeholder="E-mail" required />
                        </div>
                        <div className='col-6 pr-0'>
                            <input className='form-control' type="email" name="check" onBlur={handleValidateEmail} placeholder="Reingrese su email" required />
                        </div>
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' value={formData.telefono} type="tel" name="telefono" onChange={handleChangeInput} placeholder="Teléfono" pattern='[0-9]{1,9999999999999999}' required minLength="8" maxLength="16"/>
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' value={formData.tarjeta} type="tel" name="tarjeta" onChange={handleChangeInput} placeholder="Ingrese los 16 números de su tarjeta" required minLength="16" maxLength="16"/>
                    </div>
                    <div className='from-group'>
                        <label>
                            Ingrese la fecha de vencimiento
                            <input className='form-control mt-3' value={formData.vencimientoAño} type="number" name="vencimientoAño" onChange={handleChangeInput} placeholder="xx" min='21' max='99' required />
                            <input className='form-control mt-3' value={formData.vencimientoMes} type="number" name="vencimientoMes" onChange={handleChangeInput} placeholder="xx" min='01' max='31' required />
                            
                        </label>
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' value={formData.seguridad} type="tel" name="seguridad" onChange={handleChangeInput} placeholder="Ingrese el código de seguridad" pattern='[0-9]{1,9999}' required minLength="3" maxLength="4"/>
                    </div>
                    {idCompra?<h5></h5> : <div className='form-group text-center m-3' >
                                    <button style={{width:"30vw"}} className='btn btn-primary'>Pagar</button>
                                </div>}
                    

                   
                </form>
              {idCompra? 
                        <>
                            <h5 className='text-center'>La compra se realizó correctamente, tu número de seguimiento es: {idCompra}</h5>
                            <div className='text-center'><NavLink to='/'><button className='btn btn-info '>Volver al inicio </button></NavLink> </div>
                        </>             
              : <h5></h5>}
                   
               
            </div>
        </>
    )
}

export default Checkout;