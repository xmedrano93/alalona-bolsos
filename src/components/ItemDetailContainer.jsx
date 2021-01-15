import {useEffect, useState, useContext} from "react"
import ItemDetail from "./ItemDetail"
import listado from "./listProducts.json"
import {useParams} from "react-router-dom"

const ItemDetailContainer = () =>{
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
        
        <ItemDetail detail={detail} stock={detail.stock} id={detail.id}/> 
     
    )
}

export default ItemDetailContainer;