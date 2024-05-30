import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Coin from "./Pages/Coin/Coin"
import Footer from "./Components/Footer/Footer"

function App() {
 

  return (
   <div className="min-h-[100vh] text-white bg-gradient-to-r from-blue-800 to-indigo-900  font-outfit">

       <Navbar></Navbar>

       <Routes>
         
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/coin/:coinId" element={ <Coin></Coin> }></Route>


       </Routes>
       <Footer></Footer>



   </div>
  )
}

export default App
