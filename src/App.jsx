import { useState } from 'react'
import './App.css'
import Code from './components/Editor'
import Output from './components/Output'
import { defaultValues } from './data/data'
import Notification from './components/Notification'

function App() {
  const [value, setValue] = useState(defaultValues[0].defaultCode)
  const [selectedLanguage, setSelectedLanguage] = useState(defaultValues[0])

  const handleSetvalue = (val) => {
    setValue(val)
  }

  console.log(value)

  return (
    <div style={{
      display:'flex'
    }}>
      <Notification />
      <Code value={value} callback={handleSetvalue} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      <Output value={value} selectedLanguage={selectedLanguage} />
    </div>
  )
}

export default App
