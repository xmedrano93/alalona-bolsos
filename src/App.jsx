import {useState} from 'react';
import "./styles/App.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavBarMenu from "./components/NavBarMenu"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart";
import {Store} from "./store/CartContext"
import Checkout from './components/Checkout'
import Error404 from './components/Error404'


function App() {
const [data, setData] = useState({
  items: [],
  cantidad:0,
  precioTotal:0,
});

  return (
    <>
      <Store.Provider value={[data, setData]}>

        <BrowserRouter>
          <NavBarMenu />

            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path='/checkout'>
                <Checkout />
              </Route>
              <Route exact path="/detail/:id_detail?">
              <ItemDetailContainer />
              </Route>
              <Route path="/category/:categoryLink?">
                <ItemListContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>

            
          </Switch>
        </BrowserRouter>

      </Store.Provider>
          </>
  );
}

export default App;
