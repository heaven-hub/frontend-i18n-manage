import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet,Navigate } from 'react-router-dom';
import './App.css';
import Login from './views/Login'
const Home = () => <h1>Home Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    {/* <Route path="/about" element={<About />} /> */}
                    <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Home />} />
                <Route path="*" element={<Navigate to="/"/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
