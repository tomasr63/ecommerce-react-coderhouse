import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { CartContext } from './context/CartContext';

function App() {

  const user = "tomi"

  return (
    <div className="App">
      <CartContext.Provider value={user} >
        <BrowserRouter >
          <NavBar />
          <Routes >
            <Route path='/' element={<Home />}></Route>
            <Route path='/items' element={<ItemListContainer />}></Route>
            <Route path='/items/category/:category' element={<ItemListContainer />}></Route>
            <Route path='/item/id/:id' element={<ItemDetailContainer />}></Route>
            <Route path='*' element={<h1>Error 404</h1>} ></Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider >
    </div>
  );
}

export default App;
