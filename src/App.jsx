import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import Intro from "./pages/Intro";
import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";
import HistoryPage from "./pages/history";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/intro" element={<Intro/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/recipes" element={<RecipePage/>} />
          <Route path="/history" element={<HistoryPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
