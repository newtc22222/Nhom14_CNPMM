import React from 'react';
import { Route, Routes } from 'react-router';
import AppLayout from './containers/AppLayout';
import Home from './pages/home/Home';
import Blog from './pages/blogs/Blog';
import BlogPage from './pages/blogs/BlogPage';
import InvoiceLayout from './pages/invoices/InvoiceLayout';
import UserPage from './pages/user/UserPage';
import ProfilePage from './pages/user/profile/ProfilePage';
import Post from './pages/post/Post';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ChatPage from './pages/chats/ChatPage';
import BillSell from './pages/invoices/seller/BillSell';
import BillBuy from './pages/invoices/buyer/BillBuy';
import NotFoundPage from './pages/notFound/NotFoundPage';

const App = () => {
  // const [blog, setBlog] = useState(null);
  // const [blogs, setBlogs] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [user, setUser] = useState(null); 

  // const context = useContext();

  return (
    <Routes>
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="blogs">
              <Route index element={<Blog />} />
              <Route path="s/:slug" element={<BlogPage />} />
              <Route path=":id" element={<BlogPage />} />
              <Route path="create-blog" element={<Post />} />
            </Route>
            <Route path="bills" element={<InvoiceLayout />} >
              <Route path='sell' element={<BillSell />} />
              <Route path='buy' element={<BillBuy />} />
            </Route>
            <Route path="chats" element={<ChatPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Route>
    </Routes>
  );
};

export default App;
