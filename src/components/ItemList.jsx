import {useEffect, useState} from "react"
import Item from "./Item"
import {useParams} from "react-router-dom"
import { getFirestore } from "../firebase/Firebase"



const ItemList = () =>{
    const {categoryLink} = useParams();
    const [result, setResult] = useState([])
    const fs = getFirestore();

    const getProducts = () =>{
        fs.collection('productos').get()
        .then(docs =>{
            let arr = [];
            docs.forEach(doc=>{
                arr.push({id: doc.id, data: doc.data()})
            })
            setResult(arr)
        })
        .catch(e => console.log(e))
    }


    
    useEffect(() =>{
        getProducts()
    }, []);

    if(categoryLink){
    return(
    result.length?
     
        <>
          
            {result.filter(item =>(item.data.category === categoryLink)).map(items =>(
                    <Item
                    title={items.data.title}
                    price={items.data.price}
                    stock={items.data.stock}
                    img={items.data.imgUrl}
                    alt={items.data.alt}
                    id={items.id}
                    categoryLink={categoryLink}
                    />
            ))
            } 
        </> 
        :
        <div className="align-items-center justify-content-center m-3 spinner-border" />
    )}else{
        return(
            result.length?
             
                <>
                    <h2 className='text-center pt-1'>
                        Nuestros productos
                    </h2>
                    <div className='text-center'>
                    {result.map(items =>(
                            <Item
                            title={items.data.title}
                            price={items.data.price}
                            stock={items.data.stock}
                            img={items.data.imgUrl}
                            alt={items.data.alt}
                            id={items.id}
                            categoryLink={categoryLink}
                            key={items.id}
                            />
                    ))
                    } 
                    </div>
                </> 
                :
                <div className="align-items-center justify-content-center m-3 spinner-border" />
        )}
}

export default ItemList;