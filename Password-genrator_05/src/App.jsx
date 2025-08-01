import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

      setPassword(pass);
    }
  }, [length, numbers, characters, setPassword]);

  const copyPasswordToOnClick = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numbers, characters, passwordGenerator])


  // useRef Hooks
  const passwordRef = useRef(null)
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder="Passwords"
          readOnly 
          ref={passwordRef} 
        />
        <button onClick={copyPasswordToOnClick}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
      </div>
      <div className=" flex text-sm gap-x-2">
        <div className="flex text-center gap-x-1">
          <input
           type="range" 
           min={6}
           max={100}
           value={length}
           className="cursor-pointer"

           onChange={(e)=>{ setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
          <div className="flex text-center gap-x-1">
            <input type="checkbox"
            defaultChecked= {numbers}
            id="numberInput"
            onChange={()=>{
              setNumbers((prev)=> !prev)
            }}
             />
             <label>Numbers</label>
          </div>
           <div className="flex text-center gap-x-1">
            <input type="checkbox"
            defaultChecked= {characters}
            id="charInput"
            onChange={()=>{
              setCharacters((prev)=> !prev)
            }}
             />
             <label>characters</label>
          </div>
      </div>
    </div>
  );
}

export default App;
