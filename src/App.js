import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Category from './components/Category';
import Home from './pages/Home';



function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/category/:id' element={<Category />} />
       <Route path='/cart' element={<Cart />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
