import React from 'react'
// lo instalo con  npm install ldrs
import { lineSpinner } from 'ldrs'

const LoaderComponent = () => {

    lineSpinner.register()
    return (
        <div style={{width:"100%", height: "50%", color:"white"}}>     
              <l-line-spinner
            size="40"
            stroke="3"
            speed="1"
            color="white"
        ></l-line-spinner>
        </div>
    )
}

export default LoaderComponent




// Default values shown
