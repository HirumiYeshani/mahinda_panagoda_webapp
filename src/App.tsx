import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import PublicFigure from "./pages/PublicFigure";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/publicfigure" element={<PublicFigure />} />
      </Routes>
    </Router>
  );
}

export default App;
