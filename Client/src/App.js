import React, { useEffect, useState } from 'react'

import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'

const axios = require("axios").default
export const CatsContext = React.createContext()
function App() {
  const [cats,setCats] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3000/cats')
    .then((res)=>{
      if(!res) return
      setCats(JSON.stringify(res.data))
    })
    .catch(err=>console.log(err))
  },[])
    return (
        <CatsContext.Provider value={cats}>
          <Main />  
          <Footer />
        </CatsContext.Provider>
    )
}

export default App
