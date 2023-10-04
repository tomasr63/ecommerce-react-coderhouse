import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './pages/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/items' element={<ItemListContainer />}></Route>
            <Route path='/items/category/:category' element={<ItemListContainer />}></Route>
            <Route path='/item/id/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='*' element={<h1 className='text-danger'>Error 404</h1>} ></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
