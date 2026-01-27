import { Routes, Route } from "react-router-dom";
//import { useState } from "react";


import './App.css'
//import MobileSideBar from "./components/SideBarMobile/MobileSideBar";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home/Home'
import Stats from './pages/Statistics/Statistics'
import DataTable from "./pages/Data Table/DataTable";
import Chart from "./pages/Charts/Chart";
import Activity from "./pages/Recent Activity/Activity";
import MobileBottomNav from "./components/MobileBottomNav/MobileBottomNav";


function App() {
  //const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);



  return (
    <div className="layout">
      <Sidebar />

      {/*
      <MobileSideBar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />
      */}
      
      <main className="main-content">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/statistics" element={<Stats/>}/>
            <Route path="/datatable" element={<DataTable/>}/>
            <Route path="/charts" element={<Chart/>}/>
            <Route path="/activity" element={<Activity/>}/>
          </Routes>
        </div>
        <MobileBottomNav/>
        <Footer/>
      </main>
    </div>
  )
}

export default App