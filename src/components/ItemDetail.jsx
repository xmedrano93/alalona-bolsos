import imagenDetalle from "../assets/product1.jpg"

const ItemDetail = ({detail}) =>{
    return(
        detail.title?
            <>
                    <div className="card d-inline-block m-3 " style={{width: "90vh"}}>
                            <img className="card-img-top p-2" src={imagenDetalle}/>
                                <div className="card-body">
                                    <h2 className="card-title">{detail.title} </h2>
                                    <h5 className="card-title">${detail.price}</h5>
                                    <h6 className="card-title">{detail.description}</h6>
                                </div>
                    </div>
            </> :
            <h3 className="text-center m-3">Estamos cargando el detalle del producto...</h3>
    )
}
export default ItemDetail;