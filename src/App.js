import React from "react"
import Demo from './components/Demo'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Routes, Route } from "react-router-dom"


function App() {
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App;
