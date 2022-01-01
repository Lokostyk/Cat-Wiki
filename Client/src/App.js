import React, { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import TopCats from './Components/TopCats/TopCats'

const axios = require("axios").default
export const CatsContext = React.createContext()
function App() {
  const [cats,setCats] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:3000/cats')
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
        </Routes>
        </CatsContext.Provider>
    )
}

export default App
