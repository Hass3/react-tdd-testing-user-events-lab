import { useState } from "react";

function App() {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [cyberChecked, setCyberChecked]= useState(false)
  const [softwareChecked, setSoftwareChecked]= useState(false)
  const [dataChecked, setDataChecked]= useState(false)
  const[isSubmited,setIsSubmitted ]=useState(false)

  function handleSubmit (e) {
    e.preventDefault();
    setIsSubmitted(true)
    setCyberChecked(false)
    setDataChecked(false)
    setSoftwareChecked(false)
    setNameInput('')
    setEmailInput('')
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <input
        value={nameInput}
        placeholder="name"
        onChange={e=>setNameInput(e.target.value)}
        />
        <input 
        value={emailInput}
        placeholder="email"
        onChange={e=>setEmailInput(e.target.value)}
        />
       <input
            type="checkbox"
            id="cyber-security"
            checked={cyberChecked}
            aria-checked={cyberChecked}
            onChange={(e)=> setCyberChecked(e.target.checked)}
          />
           <label htmlFor="cyber-security">cyber security</label>
            <input
            type="checkbox"
            id="software-engineering"
            checked={softwareChecked}
            aria-checked={softwareChecked}
            onChange={(e)=> setSoftwareChecked(e.target.checked)}
          />
           <label htmlFor="software-engineering">Software Engineering</label>
            <input
            type="checkbox"
            id="data-anaylist"
            checked={dataChecked}
            aria-checked={dataChecked}
            onChange={(e)=> setDataChecked(e.target.checked)}
          />
           <label htmlFor="data-anaylist">Data analyst</label>
           <button type="submit">Submit</button>
      </form>
      {isSubmited ? <h1>Thanks for the Support</h1>: null}
    </main>
  );
}

export default App;
