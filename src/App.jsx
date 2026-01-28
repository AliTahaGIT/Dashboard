import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home/Home'
import Stats from './pages/Statistics/Statistics'
import DataTable from "./pages/Data Table/DataTable";
import Chart from "./pages/Charts/Chart";
import Activity from "./pages/Recent Activity/Activity";
import MobileBottomNav from "./components/MobileBottomNav/MobileBottomNav";
import Profile from "./pages/Profile/Profile";


function App() {
  const [isBarOpen, setIsBarOpen] = useState(false);



  return (
    <div className="layout">
      <Sidebar isOpen={isBarOpen}/>
      
      <main className="main-content">
        <Navbar isOpen={isBarOpen} Open={() => setIsBarOpen((prev) => !prev)} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/statistics" element={<Stats/>}/>
            <Route path="/datatable" element={<DataTable/>}/>
            <Route path="/charts" element={<Chart/>}/>
            <Route path="/activity" element={<Activity/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
        <MobileBottomNav/>
        <Footer/>
      </main>
    </div>
  )
}

export default App