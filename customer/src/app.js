import React from 'react';
import { Route, Routes } from 'react-router';
import AppLayout from './customers/containers/AppLayout';
import Home from './customers/pages/home/Home';
import Blog from './customers/pages/blogs/Blog';
import Invoice from './customers/pages/invoices/Invoice';
import UserPage from './customers/pages/user/UserPage';
import ProfilePage from './customers/pages/user/profile/ProfilePage';
import Post from './customers/pages/post/Post';
import Login from './customers/pages/login/Login';
import Register from './customers/pages/register/Register';

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
              <Route path="create-blog" element={<Post />} />
            </Route>
            <Route path="bills" element={<Invoice />} />
            <Route path="user" element={<UserPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
    </Routes>
  );
};

export default App;
