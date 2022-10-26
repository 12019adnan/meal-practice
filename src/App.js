import {Route, Routes } from 'react-router-dom';
import './App.css';
import MainHeader from './components/Header/MainHeader/MainHeader';
import Home from './components/Header/Home/Home'
import About from './components/Header/About/About';
import Login from './components/Header/Login/Login';
import NotFound from './components/NotFound/NotFound';
import CardDetail from './components/Header/CardDetail/CardDetail';
function App() {
  return (
    <div className="App">
        <MainHeader></MainHeader>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/card/:cardDetail' element={<CardDetail></CardDetail>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;
