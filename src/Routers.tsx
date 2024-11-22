import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SiderBar from '@/views/SiderBar'
import Login from '@/views/Login'

const Contact = () => <h1>Contact Page</h1>;
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/projects" />} />
                <Route path="/" element={<SiderBar />} >
                    <Route path="projects" element={<Contact />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/projects"/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
