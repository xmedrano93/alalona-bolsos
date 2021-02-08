import {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {getFirestore} from '../firebase/Firebase'


const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState([])
    const {id_detail} = useParams();
    const fs = getFirestore();

    const productDetail = ()  => { 
    fs.collection('productos').doc(id_detail).get()
    .then(docs =>{
    if(docs.exists){
        setDetail(docs.data())
    }
    })
    .catch(e => console.log(e))
    }

    
        useEffect(() =>{

            productDetail();
        },[])
    
    return(
        
        <ItemDetail detail={detail} stock={detail.stock} id={detail.id} img={detail.imgUrl}/> 
     
    )
}

export default ItemDetailContainer;