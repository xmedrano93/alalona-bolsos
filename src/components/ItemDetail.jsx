import {useHistory} from 'react-router-dom'
import {useContext, useState} from 'react'
import {Store} from '../store/CartContext'

const ItemDetail = ({detail, stock, img}) => {
  const history = useHistory();
  const [data, setData] = useContext(Store)
  const [count, setCount] = useState (1)
  
  const onAddCart = (e) =>{

   const itemId = data.items.map(item => item.id)
  const itemSearch = itemId.find(itemZ => itemZ === detail.id)

      if(itemSearch){
        console.log("Ya existe")
        alert('Ya existe producto en el carrito, eliminelo y vuelvalo a cargar')
      }else{

          data.items.qtyUn = count
          detail.qtyUn = data.items.qtyUn
          let totalProducto = detail.price * detail.qtyUn  
          setData({...data,
            cantidad: data.cantidad + count,
            items: [...data.items, detail],  
            precioTotal: data.precioTotal + totalProducto 
          }) 


          history.push("/cart")
 
  }}

  const add = () =>{
      if(count < stock){
      setCount (count + 1) ;
  }}
  const less = () =>{
      if(count > 0){
      setCount (count-1);
  }}

  return detail.title ? (
    <>
    <div className="container-fluid" key={detail.id}>
      <div className="row d-inline-block m-1">
        <div className="card d-inline-block ">
              <img className="card-img-top"  style={{width: "38vw", height:'60vh'}} src={`/images/${img}`} alt={detail.title}/>
            </div>
      </div>
      <div className="row d-inline-block m-2">
        <div className="container d-inline-block">
          <h2 className="card-title">{detail.title} </h2>
          <h5 className="card-title">${detail.price}</h5>
          <h6 className="card-title">{detail.description}</h6>
          <h2 className="text-success d-inline-block m-2">
            <button onClick={less} className="btn btn-light">-</button>
                <p className="d-inline-block m-3 pl-4 pr-4" >{count}</p>
            <button onClick={add} className="btn btn-light">+</button>
          </h2>
          <button onClick={()=> onAddCart(detail.id)} className="btn btn-primary d-block m-3">
              Agregar al carrito
          </button>
        </div>
      </div>
        
    </div>


    </>
  ) : (
    <div className="align-items-center justify-content-center m-3 spinner-border" />
  );
};
export default ItemDetail;
