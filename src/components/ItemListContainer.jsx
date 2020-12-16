import ItemCount from "./ItemCount";
import img1 from "../assets/imagen1.png"


function ItemListContainer ({description, stock}) {
    const onAdd = () =>{
     alert("Se han agregado productos al carrito")
     
    }
    return(
        <>
                <div className="card d-inline-block m-3" style={{width: "40vh"}}>
                    <img className="card-img-top m-2" src={img1} alt="Ecommerce product"/>
                    <div className="card-body">
                        <h5 className="card-title">{description}</h5>
                    </div>
                    <h2 className="text-success d-inline-block m-2"><ItemCount stock={stock}/> </h2> 
                    <a onClick={onAdd} href="#" className="btn btn-primary d-block m-2">Agregar al carrito</a>
                </div>
        </>
    );
}

export default ItemListContainer;