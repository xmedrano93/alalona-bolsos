import ItemCount from "./ItemCount";

function Item ({stock, title, price, key, pictureUrl, alt}){

    const onAdd = () =>{
        alert("Se han agregado productos al carrito")
    }

    return(
        <>
            <div key={key} className="card d-inline-block m-3" style={{width: "40vh"}}>
                <img className="card-img-top m-2 p-2" src={pictureUrl} alt={alt}/>
                    <div className="card-body">
                        <h2 className="card-title">{title} </h2>
                        <h5 className="card-title">${price}</h5>
                    </div>
                <h2 className="text-success d-inline-block m-2"><ItemCount stock={stock}/> </h2> 
                <a onClick={onAdd} href="#" className="btn btn-primary d-block m-2">Agregar al carrito</a>
            </div>    
    </>
    )
}

export default Item;