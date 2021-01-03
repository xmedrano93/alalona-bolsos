import ItemCount from "./ItemCount"
import {withRouter} from "react-router-dom"

const ItemDetail = ({detail, onAddCart}) => {

  return detail.title ? (
    <>
      <div className="card d-inline-block m-3 " style={{ width: "20vw"}}>
        <img className="card-img-top" src="https://placehold.it/300x300" alt="img test"/>
        <div className="card-body">
          <h2 className="card-title">{detail.title} </h2>
          <h5 className="card-title">${detail.price}</h5>
          <h6 className="card-title">{detail.description}</h6>
        </div>
        <h2 className="text-success d-inline-block m-2">
          <ItemCount stock={detail.stock} />{" "}
        </h2>
        <div className="container m-2">
          <div className="btn-toolbar">
            <div className="btn-group">
              <button onClick={onAddCart} className="btn btn-primary d-block">
                {/* <NavLink to="#" className="text-white"> */}
                  Agregar al carrito
                {/* </NavLink> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="align-items-center justify-content-center m-3 spinner-border" />
  );
};
export default ItemDetail;
