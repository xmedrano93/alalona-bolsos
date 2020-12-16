import CartWidget from "./CartWidget";

function NavBar ({children}) {
return(
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Alalona!</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Productos</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorías
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <p className="dropdown-item" href="#">Lonas</p>
          <p className="dropdown-item" href="#">Mochilas</p>
          <div className="dropdown-divider"></div>
          <p className="dropdown-item" href="#">Neceseres</p>
        </div>
      </li>

    </ul>
      <div className="m-2"><a href="#"><CartWidget/></a></div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

  </div>
  
</nav>
    </>
);

}

export default NavBar;