import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
// import { Login } from "@mui/icons-material";

// import { Login } from "@mui/icons-material";
// import l1 from "./Components/login/Login"
function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Work /> */}
      {/* <Testimonial /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <BrowserRouter>
      <Routes>
        
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
