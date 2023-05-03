import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import Home from "./components/Home/Home.jsx"

import "./components/header/header.scss"
import "./components/footer/footer.scss"
import "./components/Home/Home.scss"

import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
