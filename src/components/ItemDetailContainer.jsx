import {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import listado from "./listProducts.json"

const ItemDetailContainer = () =>{
    
    const [detail, setDetail] = useState([])

    const getItems = new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(listado[0])
        }, 2000); 
    })
    
        useEffect(() =>{
            getItems.then(resultDetail =>{
                setDetail(resultDetail)
            })
        },[])
    return(
        
        <ItemDetail detail={detail} /> 
     
    )
}

export default ItemDetailContainer;