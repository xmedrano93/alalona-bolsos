import "./styles/App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer description="Producto 'A'"stock="5"/>
      <ItemListContainer description="Producto 'B'"stock="10"/>
      <ItemListContainer description="Producto 'C'"stock="15"/>
      <ItemListContainer description="Producto 'D'"stock="20"/>

    </>
  );
}

export default App;
