import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import Home from "./components/home/Home";
import Login from './components/login/Login';
import Twostepverify from "./components/twostepverify/Twostepverify";
import Important from "./components/important/Important";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {

  const TrackPageView = () => {
    const location = useLocation();
  
    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);
  
    return null;
  };

  return (
    <>
      <Router>
      <TrackPageView />
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
