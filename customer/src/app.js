import React from 'react'
import { Route, Routes } from 'react-router';
import AppLayout from './customers/containers/AppLayout';
import Home from './customers/pages/home/Home';
import Blog from './customers/pages/blogs/Blog';
import Invoice from './customers/pages/invoices/Invoice';
import Login from './customers/pages/login/Login';
import Register from './customers/pages/register/Register';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="bills" element={<Invoice />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
    </Routes>
  );
}

export default App;