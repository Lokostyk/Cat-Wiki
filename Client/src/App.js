import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import CatInfo from './Components/CatInfo/CatInfo'

import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import TopCats from './Components/TopCats/TopCats'

import {SERVER_LINK} from "./_Server_Link"
const axios = require("axios").default
export const CatsContext = React.createContext()
function App() {
  const [cats,setCats] = useState([])
  
  useEffect(()=>{
    axios.get(`${SERVER_LINK}/cats`)
    .then((res)=>{
      setCats(res.data)
    })
    .catch(err=>console.log(err))
  },[])
    return (
        <CatsContext.Provider value={cats}>
        <Routes>
          <Route path="/" element={<><Main/><Footer /></>}/>
          <Route path="/top10cats" element={<><TopCats/><Footer /></>}/>
          <Route path="/top10cats/:catBreed" element={<><CatInfo/><Footer /></>} />
        </Routes>
        </CatsContext.Provider>
    )
}

export default App
