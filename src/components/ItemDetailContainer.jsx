import {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import listado from "./listProducts.json"
import {useParams, withRouter} from "react-router-dom"


const ItemDetailContainer = (propsCart) =>{

    const {history} = propsCart;

    const onAddCart = () =>{
      
      history.push("/cart")
  }

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
        
        <ItemDetail detail={detail} onAddCart={onAddCart}/> 
     
    )
}

export default withRouter(ItemDetailContainer);