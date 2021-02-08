import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import {NavDropdown, Form, FormControl, Button, Navbar, Nav} from "react-bootstrap"
import {useState, useContext} from "react"
import {Store} from '../../src/store/CartContext'
import {Fade} from "react-bootstrap"
import '../styles/NavMenuBar.css'

function NavBarMenu() {
  const [data, setData] = useContext(Store);
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
    <div className='NavBarStyle'>
      <Navbar className="sticky-top" bg="light" expand="lg">
        <Navbar.Brand><NavLink to="/">Alalona!</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/">Productos</NavLink></Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item><NavLink to="/category/lona">Lonas</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/category/mochila">Mochilas</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/category/neceser">Neceseres</NavLink></NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
                {/* Inicia el Cart */}
                <div className="float-right mr-3 cartItem">
            <a onClick={() => setOpenCart(!openCart)} aria-controls="example-fade-text" aria-expanded={openCart}>
              <CartWidget/>
            </a>
            <Fade in={openCart}>
              <div id="example-fade-text" className='cartItemMap'>
              {data.items?.map(cartItem =>
                <h6 className='showCart'>{cartItem.title} Cantidad:{cartItem.qtyUn}</h6>
                )}
                {data.items.length ==0? <h5></h5>:<NavLink to='/cart'><button className='btn btn-info'>Ir al carrito</button></NavLink>}
              </div>
            </Fade>
          </div>
          {/* Finaliza el Cart */}
    </>
  );
}

export default NavBarMenu;
