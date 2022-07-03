import React, { useState } from 'react'
import "./App.css";

function App() {

  /**
   * Hooks like state
   */
  const [toSearch, setToSearch] = useState("")
  const urlValidator = / [-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*) /

  const handleOnChange = (e) => {
    setToSearch((search) => search=e.target.value);
  }

  const handleOnClick = (e) => {
    if(toSearch !== "" && toSearch !== null){
      if(toSearch.match(urlValidator)){
        window.location.href=`${toString}`;
      } else {
        window.location.href=`https://duckduckgo.com/?q=${toSearch}&t=hs&va=l&ia=web`
      }
    }
  }
  
  const handleOnKeyUp = (e) => {
    if(e.code === "Enter"){
      if(toSearch !== "" && toSearch !== null){
        if(toSearch.match(urlValidator)){
          window.location.href=`${toString}`;
        } else {
          window.location.href=`https://duckduckgo.com/?q=${toSearch}&t=hs&va=l&ia=web`
        }
      }
    }
  }

  return (
    <div className="App w-screen h-screen flex flex-col flex-wrap justify-center items-center">
      <section className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-2'>
        <div className='w-16 h-16 rounded overflow'>
          <img src="/images/shark-icon.png" className='w-[100%] h-[100%]'/>
        </div>
        <h1>SharkBrowser</h1>
      </section>
      <label className='flex flex-row flex-wrap justify-center items-center my-3 w-[80% ] sm:w-[50%]'>
        <input type="text" placeholder='Escriba para empezar a navegar' className='p-2 w-[80%] rounded-l' onChange={handleOnChange} onKeyUp={handleOnKeyUp}/>
        <button className='p-[.335rem] text-white rounded-r hover:bg-blue-400' onClick={handleOnClick}>
          <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30"> 
            <path d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z" stroke="currentColor"></path>
          </svg>
        </button>
      </label>
      <p>Powered By On3l7d15h © Copyright</p>
    </div>
  );
}

export default App;
