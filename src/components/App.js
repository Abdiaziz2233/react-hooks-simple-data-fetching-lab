// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(resp => setData(resp))
        setLoading(false)
    }, [])

    if(loading){
        return <p>Loading...</p>
    }


  return (
    <div>
      <img src={data.message} alt="A Random Dog" />
    </div>
  )
}

export default App
