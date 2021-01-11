import {useHistory} from 'react-router-dom'
import {useContext, useState} from 'react'
import {Store} from '../store/CartContext'

const ItemDetail = ({detail, stock}) => {
  const history = useHistory();
  const [data, setData] = useContext(Store)
  const [count, setCount] = useState (0)

  const onAddCart = () =>{
    setData({
            cantidad: [...data.cantidad, count],
            items: [...data.items, detail],
          })

    history.push("/cart")
  }
  
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
              <img className="card-img-top" src="https://placehold.it/350x350" alt="img test"/>
            </div>
      </div>
      <div className="row d-inline-block m-2">
        <div className="container d-inline-block">
          <h2 className="card-title">{detail.title} </h2>
          <h5 className="card-title">${detail.price}</h5>
          <h6 className="card-title">{detail.description}</h6>
          <h2 className="text-success d-inline-block m-2">
            {/* <ItemCount stock={detail.stock} /> */}
            <button onClick={less} className="btn btn-light">-</button>
                <p className="d-inline-block m-3 pl-4 pr-4" >{count}</p>
            <button onClick={add} className="btn btn-light">+</button>
          </h2>
          <button onClick={onAddCart} className="btn btn-primary d-block m-3">
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
