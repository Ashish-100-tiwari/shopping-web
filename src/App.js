import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import Home from "./components/Home/Home.jsx"
import Contact from "./components/contact/contact.jsx"
import About from "./components/about/About.jsx"


import "./components/header/header.scss"
import "./components/footer/footer.scss"
import "./components/Home/Home.scss"
import "./components/about/About.scss"
import "./components/contact/contact.scss"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
