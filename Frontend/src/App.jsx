import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/authpages/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './components/authpages/Login'
import IsAuth from './AuthRoutes/IsAuth'

import PageAccess from './AuthRoutes/PagesAccess'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Menswallet from './components/MensWallet/Menswallet'
import Ladieswallet from './components/Ladieswallet/Ladieswallet'
import Bags from './components/Bags/Bags'
import LadiesBags from './components/LadiesBags/LadiesBags'
import Gifts from './components/Gifts/Gift'


function App() {
  const [count, setCount] = useState(0)

  

  return (
   <div>
   

    <Routes  >
   <Route element={<IsAuth/>}>
   <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
</Route>
   



   <Route element={<PageAccess/>}>
    <Route path='/' element={<><Navbar/><Home/> </>}/>
    <Route path='/mens' element={<><Menswallet/></>}/>
    <Route path='/ladies' element={<><Ladieswallet/></>}/>
    <Route path='/bags' element={<><Bags/></>}/>
    <Route path='/ladiesbags' element={<><LadiesBags/></>}/>
    <Route path='/gifts' element={<><Gifts/></>}/>




    
   </Route>
   
    </Routes>
   </div>
  )
}

export default App
