import "./styles/App.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavBarMenu from "./components/NavBarMenu"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart";


function App() {
  return (
    <>

      <BrowserRouter>
        <NavBarMenu />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/detail/:id_detail?">
            <ItemDetailContainer />
            </Route>
            <Route path="/category/:categoryLink?">
              <ItemListContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
