import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'; 
import Achievements from './pages/Achievements'; 

function App() {
  return (
    <div className='flex flex-col h-screen mx-6 text-sm'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/achievements" Component={Achievements} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
