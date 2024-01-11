import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Header from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";

import Home from "./component/page/HomePage/Home";
import About from "./component/page/HomePage/NavComponents/About";
import Services from "./component/page/HomePage/NavComponents/Services";
import WebDev from "./component/page/HomePage/NavComponents/WebDev";
import ERR from "./component/page/HomePage/NavComponents/ERR";
import NestedRouting from "./component/page/HomePage/NavComponents/NestedRouting";
import ProductsMulti from "./component/page/HomePage/NavComponents/ProductsMulti";
import LoginPage from "./component/page/HomePage/NavComponents/LoginPage";
import PrivateRouting from "./component/page/HomePage/NavComponents/PrivateRouting";
import Products from "./component/page/HomePage/NavComponents/Products";
import Contact from "./component/page/HomePage/NavComponents/Contact";




function App() {
  return (
    <div className="App">

      <Header />
       <Routes>
          <Route path="/" element={<Home />} />

          <Route path="contact" element={<Contact/>}></Route>

          <Route path="about" element={<About />}>
            <Route path="WebDev" element={<WebDev />} />
          </Route>
          {/* Nestedn Routing */}

          <Route path="services" element={<PrivateRouting Component={Services}/>}>
            <Route path="nestedrouting" element={<NestedRouting />}/>
            <Route path="WebDev" element={<WebDev />} />
          </Route>
          {/* Nestedn Routing */}

          <Route path="p/:id" element={<PrivateRouting Component={ProductsMulti} />}></Route>
          {/* Dynamic Routing */}

          <Route path="products" element={<Products />}/>

          <Route path="login" element={<LoginPage />}></Route>
          

          <Route path="*" element={<ERR />} />
          {/* For wrong path */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer />
     

    </div>
  );
}

export default App;
