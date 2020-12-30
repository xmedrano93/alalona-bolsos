import {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import listado from "./listProducts.json"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () =>{
    const {id_detail} = useParams();
    console.log(id_detail)
    const [detail, setDetail] = useState([])

    const getItems = new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(listado[id_detail])
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