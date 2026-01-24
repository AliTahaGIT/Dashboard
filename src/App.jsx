import { Routes, Route } from "react-router-dom";

import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home/Home'
import Stats from './pages/Statistics/Statistics'


function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main-content">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/statistics" element={<Stats/>}/>
          </Routes>
        </div>
        <Footer/>
      </main>
    </div>
  )
}

export default App