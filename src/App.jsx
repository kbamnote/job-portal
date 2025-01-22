import "./App.css";
import ContactPage from "./components/navbarSection/ContactUs";
import Jobs from "./components/navbarSection/Jobs";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
