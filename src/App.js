import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedNavigaton from '../src/components/pages/SharedNavigation/SharedNavigation';
import './App.css';
import Home from './components/home/Home';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Login/Register/Register';


function App() {
  return (
    <>
   <BrowserRouter>
   <SharedNavigaton></SharedNavigaton>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
   </BrowserRouter>
     
    </>
  );
}

export default App;
