import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/home/Home";
import Login from './components/login/Login';
import Twostepverify from "./components/twostepverify/Twostepverify";
import Important from "./components/important/Important";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/twostepverify" element={<Twostepverify/>}/>
          <Route path="/important" element={<Important/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
