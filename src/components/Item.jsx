import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";

function Item ({stock, title, price, key, pictureUrl, alt, id}){
    console.log(pictureUrl)
    const onAdd = () =>{
        alert("Se han agregado productos al carrito")
    }

    return(
        <>
            
            <div key={key} className="card d-inline-block m-3">
                <img className="card-img-top" src="https://placehold.it/300x300" alt={alt}/>
                    <div className="card-body">
                        <h2 className="card-title">{title} </h2>
                        <h5 className="card-title">${price}</h5>
                    </div>
                <h2 className="text-success d-inline-block m-2"><ItemCount stock={stock}/> </h2>
                <div className="container m-2">
                    <div className="btn-toolbar">
                        <div className="btn-group">
                        <button onClick={onAdd} href="#" className="btn btn-primary d-block"><NavLink to="#" className="text-white">Agregar al carrito</NavLink></button>
                        <button className="btn btn-info d-block"><NavLink to={`/detail/${id}`} className="text-white">Ver más</NavLink>  </button>
                           
                        </div> 
                    </div>
                </div>
            </div> 
            
   
    </>
    )
}

export default Item;