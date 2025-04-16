
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Jewelery from './pages/Jewelery';
import Living from './pages/Living';
import Electronics from './pages/Electronics';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Wishlist from './pages/wishlist'
import Payment from './components/Payment';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'/>
        <Route index element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/jewelery' element={<Jewelery/>} />
        <Route path='/electronics' element={<Electronics/>} />
        <Route path='/living' element={<Living/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/payment' element={<Payment/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
