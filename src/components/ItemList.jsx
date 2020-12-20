import {useEffect, useState} from "react"
import listProducts from "./listProducts.json"
import Item from "./Item"



const ItemList = () =>{

    const [result, setResult] = useState([])

    const getProducts = new Promise((resolve) =>{
        setTimeout(() => {
            resolve(listProducts)
        }, 2000);
    })


    
    useEffect(() =>{
        getProducts.then(itemMap =>{
            setResult(itemMap)}
    )}, [])
    
    return(
    result.length? 
        <>

            {result.map(items =>(
                    <Item
                    key={items.id}
                    title={items.title}
                    price={items.price}
                    stock={items.stock}
                    pictureUrl={items.pictureUrl}
                    alt={items.alt}
                    />
            ))
            }
        </> : <h3 className="text-center m-3">Estamos cargando los artículos...</h3> 
    )
}

export default ItemList;