import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemCount from "./components/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Item from "./components/Item"
import Cart from "./components/Cart"
import CartProvider from "./components/CartProvider"


function App() {
  

  return ( 
    <CartProvider>
        <div className="App">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
   
  )
}

export default App
