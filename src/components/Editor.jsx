import React, { useRef, useState } from 'react'
import {Editor} from '@monaco-editor/react'
import DropDown from './DropDown'
import {defaultValues} from '../data/data'
const Code = ({value,callback,selectedLanguage,setSelectedLanguage}) => {
  
  
  const editorRef = useRef()

  const handleMount = (editor) => {
    editorRef.current = editor
  }

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language)
    callback(language.defaultCode)
  }
  console.log(value)
  
  return (
    <div style={{width:'50%'}}>
      <DropDown callback={handleChangeLanguage}/>
        <Editor
            height="90vh"
            language={selectedLanguage.language}
            defaultValue={selectedLanguage.defaultCode}
            theme='vs-dark'
            onMount={handleMount}
            value={value}
            onChange={(value)=>callback(value)}
        />
    </div>
  )
}

export default Code