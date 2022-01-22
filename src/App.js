import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedNavigaton from "../src/components/pages/SharedNavigation/SharedNavigation";
import "./App.css";
import Winter from "./components/Collection/Winter/Winter";
import Home from './components/home/Home';
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Login/Register/Register";
import ProductSearch from "./components/pages/ProductSearch/ProductSearch";

function App() {


  return (
    <>

    
      <BrowserRouter>
        <SharedNavigaton></SharedNavigaton>
        <Routes>
          
          <Route exact path="/" element={<Home />}>
          
            <Route path="winter" element={<Winter />} />
            <Route path="search" element={<ProductSearch />} />
          </Route>
          
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
