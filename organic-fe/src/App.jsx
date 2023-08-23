import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      {/*<Route path="/cart" />*/}
      {/*<Route path="/admin" />*/}
      <Route path="*" />
    </Routes>
      <Footer/>
    </>
  )
}

export default App;
