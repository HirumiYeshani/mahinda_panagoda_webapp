import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import AboutUs from './pages/AboutUs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
