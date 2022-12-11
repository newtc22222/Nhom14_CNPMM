import './App.css';
import { Routes, Route} from 'react-router-dom';
import LayoutAdmin from './admins/containers/LayoutAdmin';
import Page404 from './admins/pages/page404/Page404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutAdmin/>}>
        <Route path='*' element={<Page404/>}/>
      </Route>
    </Routes>
  );
}

export default App;
