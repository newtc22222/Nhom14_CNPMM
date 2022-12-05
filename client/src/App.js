import './App.css';
import Home from './customers/pages/Home';
import { Routes, Route} from 'react-router-dom';
import Layout from './customers/containers/Layout';
import LayoutAdmin from './admins/containers/LayoutAdmin';
import NotFound from './customers/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='blogs' element={<Home/>}/>
        <Route path='contact' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      <Route path="/admin/" element={<LayoutAdmin/>}>
      </Route>
    </Routes>
  );
}

export default App;
