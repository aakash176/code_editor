import React from 'react'
import { defaultValues } from '../data/data'
const DropDown = ({ callback }) => {
    const handleChange = (e) => {
        let obj = defaultValues.filter((d) => d.language === e.target.value)[0]
        console.log(obj);
        
        callback(obj)
    }
    return (
        <div style={{}}>
            <select style={{
                padding: '5px',
                backgroundColor: '#36454F',
                color: 'white'
            }}
            onChange={handleChange}
            >
                {
                    defaultValues.map((d) => (
                        <option key={d.language} value={d.language} >{d.language}({d.version})</option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropDown