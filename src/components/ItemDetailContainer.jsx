import {useEffect, useState} from "react"
import ItemDetail from "./ItemDetail"
import listado from "./listProducts.json"
import {useParams} from "react-router-dom"
import {getFirestore} from '../firebase/Firebase'


const ItemDetailContainer = () =>{
    const [detail, setDetail] = useState([])
    const {id_detail} = useParams();
    const fs = getFirestore();

    // const getItems = new Promise((resolve) =>{
    //     setTimeout(() =>{
    //     resolve(listado[id_detail])
    //     }, 500); 
    // })
     
    //     fs.collection('productos').doc(id_detail).get()
    //     .then(docs =>{
    //         let arr = []
    //     if(docs.exists){
    //         setDetail({id: docs.id, data: docs.data()})
    //         console.log(detail.data)
    //     }
    // })
    // .catch(e => console.log(e))
    const productDetail = ()  => { 
    fs.collection('productos').doc(id_detail).get()
    .then(docs =>{
    if(docs.exists){
        setDetail(docs.data())
    }
    })
    .catch(e => console.log(e))
    console.log(detail.data)
    }

    
        useEffect(() =>{
            // getItems.then(resultDetail =>{
            //     setDeta
            productDetail();
            productDetail();
        },[])
    
    return(
        
        <ItemDetail detail={detail} stock={detail.stock} id={detail.id}/> 
     
    )
}

export default ItemDetailContainer;