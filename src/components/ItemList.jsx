import {useEffect, useState} from "react"
import listProducts from "./listProducts.json"
import Item from "./Item"
import {useParams} from "react-router-dom"



const ItemList = () =>{

    const {categoryLink} = useParams();
    const [result, setResult] = useState([])

    const getProducts = new Promise((resolve) =>{
        setTimeout(() => {
            resolve(listProducts)
        }, 2000);
    })


    
    useEffect(() =>{
        console.log(categoryLink)
        getProducts.then(itemMap =>{
            setResult(itemMap)}
            
    )}, [categoryLink]);

    if(categoryLink){
    return(
    result.length?
     
        <>
            
            {result.filter(item =>(item.category === categoryLink)).map(items =>(
                    <Item
                    title={items.title}
                    price={items.price}
                    stock={items.stock}
                    pictureUrl={items.pictureUrl}
                    alt={items.alt}
                    id={items.id}
                    categoryLink={categoryLink}
                    key={items.id}
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
                    
                    {result.map(items =>(
                            <Item
                            title={items.title}
                            price={items.price}
                            stock={items.stock}
                            pictureUrl={items.pictureUrl}
                            alt={items.alt}
                            id={items.id}
                            categoryLink={categoryLink}
                            />
                    ))
                    } 
                </> 
                :
                <div className="align-items-center justify-content-center m-3 spinner-border" />
        )}
}

export default ItemList;