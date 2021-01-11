import {useEffect, useState, useContext} from "react"
import ItemDetail from "./ItemDetail"
import listado from "./listProducts.json"
import {useParams} from "react-router-dom"
import {Store} from '../store/CartContext'

const ItemDetailContainer = () =>{
    const[data, setData] = useContext(Store)
    const [detail, setDetail] = useState([])
    const {id_detail} = useParams();



//     const onAddCart = () =>{
//         setData({...data,
//                 items: [data.items, detail]})

//         history.push("/cart")
//         console.log(data)
//         console.log(detail)

//   }




    const getItems = new Promise((resolve) =>{
        setTimeout(() =>{
        resolve(listado[id_detail])
        }, 500); 
    })
    
        useEffect(() =>{
            getItems.then(resultDetail =>{
                setDetail(resultDetail)
            })
        },[])
    
    return(
        
        <ItemDetail detail={detail} stock={detail.stock} /> 
     
    )
}

export default ItemDetailContainer;