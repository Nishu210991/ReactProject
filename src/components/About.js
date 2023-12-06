import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white' 

    // })

    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor : props.mode==='dark'?'rgb(36 74 104':'white'
    }
    

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //         }
        //    }

  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" >
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                <strong>   Analyze Your Text </strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is the place where you can analyze your text.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong> Free to Use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  You can use it .
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                  <strong> Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   This is brower comptible .
                </div>
                </div>
    </div>
    </div>
     
      
    </div>
  )
}
