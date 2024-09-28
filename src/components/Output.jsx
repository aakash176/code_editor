import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const Output = ({value, selectedLanguage}) => {
    const [outputVal, setOutput] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const apiCall = async() => {
        try {
            setLoading(true)
            const res = await axios.post('https://emkc.org/api/v2/piston/execute',{
                "language": selectedLanguage.language,
                "version": selectedLanguage.version,
                "files": [
                    {
                    "content": `${value}`
                    }
                ]
            })
            
            setOutput(res.data.run.output.split("\n"))
            res.data.run.stderr?setError(true):setError(false)
            
            
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong! Please try again")
        }
        finally{
            setLoading(false)
        }
        
    }
    return (
        <div style={{
            width: "50%",
            height: "95vh",
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span style={{fontSize:'20px',color:'#E2DFD2', fontFamily:'cursive'}}>Output</span>
            <button className={`${loading?"btn-loading":""}`} style={{
                position: "relative",
                padding: "8px 16px",
                backgroundColor: "#009579",
                border: "none",
                outline: "none",
                borderRadius: "2px",
                cursor: "pointer",
                width:'100px',
                color:'white'
                
            }} onClick={apiCall}>
                <span className={`${loading?"text-loading":""}`}>Run Code</span>
            </button>

            <div style={{
                backgroundColor: 'black',
                color: error?'red':'white',
                height: '84vh',
                padding: '5px',
                marginLeft:'2px',
                border: error?'2px solid red':'',
                fontFamily:'serif'

            }}>
                {outputVal?outputVal.map((op,i) => (<p key={i}>{op}</p>)):<p >Click Run Code to see the output....</p>}
            </div>

        </div>
    )
}

export default Output