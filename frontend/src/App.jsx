import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'; 
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex flex-col h-screen mx-6'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/achievements" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
