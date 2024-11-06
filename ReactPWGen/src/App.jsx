import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [spchar, setSpchar] = useState(false);
  const [pw, setPw] = useState("");

  const pwRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (num) str += "0123456789"
    if (spchar) str += "~!@#$%^&*()_+{}[]|\:;?/><"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length); 
      pass += str.charAt(char)
    }

    setPw(pass)
  }, [length, num, spchar, setPw])

  const copypwtoClip = useCallback(()=>{
    pwRef.current?.select()
    pwRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(pw)
  },[pw])

  useEffect(()=>{
    passwordGenerator()
  },[length, num, spchar, passwordGenerator])

  return (
      <div className="w-full max-w-fit mx-auto shadow-md rounded-lg p-8 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-6xl text-center text-red-300 my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input type="text" value={pw} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={pwRef}/>
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copypwtoClip}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-8">
          <div className="flex items-center gap-x-2">
            <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
            <label >Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" defaultChecked={num} id="numberInput" className="cursor-pointer" onChange={(e)=>{setNum((prev)=>!prev)}}/>
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" defaultChecked={spchar} id="numberInput" className="cursor-pointer" onChange={(e)=>{setSpchar((prev)=>!prev)}}/>
            <label> Special Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App