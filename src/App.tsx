import { BrowserRouter as Router, Routes, Route } from "react-router-dom";   
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";


function App() {

  return (
<Router>
  <Routes>
    <Route path="/contactus" element={<ContactUs/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>

  </Routes>
</Router>
  );
}

export default App;
