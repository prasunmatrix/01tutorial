import React from 'react'
import { useState } from 'react';

const Content = () => {
  const [name,setName]=useState('Dave');
  const handleNameChange = () =>{
    const names =['Bob','Kevin','Dave','Alex'];
    const int=Math.floor(Math.random()*4);
    //return names[int];
    setName(names[int]);
  }

  const handleClick = () => {
    console.log("You clicked it")
  }
  const handleClick2 = (name) => {
    console.log(`${name} clicked it`)
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
  }

  return (
    <main>
      {/* <p>
        Hello {handleNameChange()}
      </p> */}
      <p>Hello {name}!</p>
      {/* <button onClick={handleClick}> Clicked It</button> */}
      <button onClick={handleNameChange}> Clicked It</button>
      <button onClick={()=>handleClick2('Dave')}> Clicked It</button>
      <button onClick={(e)=>handleClick3(e)}> Clicked It</button>   
    </main>
  )
}

export default Content
