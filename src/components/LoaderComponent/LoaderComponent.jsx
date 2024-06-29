import React from 'react'
// lo instalo con  npm install ldrs
import { lineSpinner } from 'ldrs'

const LoaderComponent = () => {

    lineSpinner.register()
    return (
        <div style={{width:"100%", height: "100vh", color:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>     
              <l-line-spinner
            size="100"
            stroke="3"
            speed="1"
            color="white"
        ></l-line-spinner>
        </div>
    )
}

export default LoaderComponent




// Default values shown
