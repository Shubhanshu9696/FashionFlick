// import './App.css';
import { Navbar } from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
