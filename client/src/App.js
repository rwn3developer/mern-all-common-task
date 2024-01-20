import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from './pages/admin/View';
import Add from './pages/admin/Add';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Edit from './pages/admin/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<View/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
