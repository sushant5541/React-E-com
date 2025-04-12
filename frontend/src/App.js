
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Living from './pages/Living';
import Beauty from './pages/Beauty';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'/>
        <Route index element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/kids' element={<Kids/>} />
        <Route path='/beauty' element={<Beauty/>} />
        <Route path='/living' element={<Living/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
