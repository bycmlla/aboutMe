import React from 'react'
import Register from '../pages/Register/Register.jsx';
import Login from '../pages/Login/Login.jsx'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from '../App.js';



const Routs = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<App />} />
                <Route path="/login"  element={<Login />}/>
                <Route path='/register' element={<Register />}/>
            </Routes>
        </BrowserRouter>

    )
}

export default Routs