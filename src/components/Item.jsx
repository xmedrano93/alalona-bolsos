import { NavLink } from "react-router-dom";

function Item ({title, price, alt, id, key, img}){


    return(
        <>
            
            <div key={key} className="card d-inline-block m-3">
                <img className="card-img-top" style={{width: "20vw"}} src={`/images/${img}`} alt={alt}/>
                    <div className="card-body">
                        <h2 className="card-title">{title} </h2>
                        <h5 className="card-title">${price}</h5>
                    </div>
                {/* <h2 className="text-success d-inline-block m-2"><ItemCount stock={stock}/> </h2> */}
                <div className="container m-2 text-center">
                        <button className="btn btn-info"><NavLink to={`/detail/${id}`} className="text-white">Ver detalle</NavLink>  </button>
                </div>
            </div> 
            
   
    </>
    )
}

export default Item;