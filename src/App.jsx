import Home from "./pages/_Home"
import Single from "./pages/_Single"
import Header from "./components/_Header"
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/single/:name" element={<Single/>} />
    </Routes>
      
    </>
  )
}

export default App
