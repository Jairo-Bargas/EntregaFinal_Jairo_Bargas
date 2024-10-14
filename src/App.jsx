import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


function App() {
  

  return ( 
    <>
      <NavBar/>
      <div>
        <ItemListContainer/>
      </div>
      <ItemCount initial={1} stock={45} onAdd={(quantity)=> console.log('Cantidad agregada', quantity)}/>
    </>
  )
}

export default App
