import { NavLink } from "react-router-dom";

function Item ({title, price, alt, id, img}){

    return(
        <>
            
            <div key={id} className="card d-inline-block m-3">
                <img className="card-img-top" style={{width: "20vw", height:'35vh'}} src={`/images/${img}`} alt={alt}/>
                    <div className="card-body">
                        <h2 className="card-title">{title} </h2>
                        <h5 className="card-title">${price}</h5>
                    </div>
                <div className="container m-2 text-center">
                        <button className="btn btn-info"><NavLink to={`/detail/${id}`} className="text-white">Ver detalle</NavLink>  </button>
                </div>
            </div> 
            
   
    </>
    )
}

export default Item;