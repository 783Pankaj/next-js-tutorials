'use client'

import { useState } from "react"
import custom from './custom.module.css'
import other from'./othere.module.css'

const page = () => {
    const [syle, setStyle] = useState({backgroundColor:"yellow"})
  return (
    <div>
        <div>
            <h2>Hello</h2>
            <h3>Marktine</h3>
            <h1 style={{backgroundColor:"pink"}}>IT company</h1>
            <h2 style={syle}>I am style</h2>
            <button onClick={()=>setStyle({backgroundColor:"green"})}>update Style</button>
            <h1 className={custom.main}>Moduler css </h1>
            <h1 className={other.main}>Moduler css</h1>
           </div>
    </div>
  )
}

export default page
