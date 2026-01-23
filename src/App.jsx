import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main-content">
        <Navbar/>
        <div className="content">
          
        </div>
        <Footer/>
      </main>
    </div>
  )
}

export default App