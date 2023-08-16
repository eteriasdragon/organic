import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      {/*<Route path="/cart" />*/}
      {/*<Route path="/admin" />*/}
      <Route path="*" />
    </Routes>

  )
}

export default App;
