import React from 'react'
import './CSS/PageTwo.css'
import { useState } from 'react'

function PageTwo() {


    const [para, setPara] = useState('Nil')


  return (
    <div>
        <h1 onClick={()=>setPara('Design')}>Design</h1>
        <h1 onClick={()=>setPara('Mobile')}>Mobile</h1>
        <h1 onClick={()=>setPara('Web')}>Web</h1>


        <p>{para}</p>
    </div>
  )
}

export default PageTwo
