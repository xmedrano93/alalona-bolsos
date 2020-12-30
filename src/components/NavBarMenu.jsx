import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import {NavDropdown, Form, FormControl, Button, Navbar, Nav} from "react-bootstrap"
import {useState} from "react"
import {Fade} from "react-bootstrap"

function NavBarMenu() {

  const [openCart, setOpenCart] = useState(false);

  return (
    <>
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

          {/* Inicia el Cart */}
          <div className="m-2">
            <a onClick={() => setOpenCart(!openCart)} aria-controls="example-fade-text" aria-expanded={openCart}><CartWidget/>
            </a>
            <Fade in={openCart}>
              <div id="example-fade-text">
              Aquí habrá productos
              </div>
            </Fade>
          </div>
          {/* Finaliza el Cart */}

          <Form inline>
            <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBarMenu;
