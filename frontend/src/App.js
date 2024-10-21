import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Items from './pages/Items';
import Home from './pages/Home';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<Login setToken={setToken} />}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/items" element={token ? <Items /> : <Login setToken={setToken} />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
