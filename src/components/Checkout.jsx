const Checkout = ()=>{
    return(
        <>
        <h3>Estamos en el Checkout</h3>
        <div className="container">

                <form>
                    <div className="form-group">
                        <input className='form-control' type="text" name="nombre" placeholder="Nombre" />
                    </div>
                    <div className="form-group">
                        <input className='form-control' type="text" name="apellido" placeholder="Apellido" />   
                    </div>
                    <div className='from-group'>
                        <input className='form-control' type="email" name="email" placeholder="E-mail" />
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' type="tel" name="tel" placeholder="Teléfono" />
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' type="tel" name="tarjeta" placeholder="Ingrese los 16 números de su tarjeta" />
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' type="tel" name="vencimiento" placeholder="Ingrese la fecha de vencimiento" />
                    </div>
                    <div className='from-group'>
                        <input className='form-control mt-3' type="tel" name="codigoSeguridad" placeholder="Ingrese el código de seguridad" />
                    </div>
                    <div className='form-group text-center m-3' >
                        <button  style={{width:"30vw"}} className='btn btn-primary'>Pagar</button>
                    </div>

                   
                </form>
            </div>
        </>
    )
}

export default Checkout;