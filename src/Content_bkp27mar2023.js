import React from 'react'
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const Content = ({items,handleCheck,handleDelete}) => {
  // const [items,setItems]=useState([
  //   {
  //     id:1,
  //     checked:true,
  //     item:"one half pound of bag of Cocoa Covered Almonds Unsalted"
  //   },
  //   {
  //     id:2,
  //     checked:false,
  //     item:"Item 2"
  //   },
  //   {
  //     id:3,
  //     checked:false,
  //     item:"Item 3"
  //   }
  // ]);
  

  // const handleCheck=(id)=>{
  //   const listItems=items.map((item)=> item.id === id ? {...item,checked:!item.checked}:item);
  //   setItems(listItems);
  //   localStorage.setItem('shopping',JSON.stringify(listItems));
  // }
  
  // const handleDelete=(id) =>{
  //   //console.log(id);
  //   const listItems=items.filter((item)=>item.id!==id);
  //   setItems(listItems);
  //   localStorage.setItem('shopping',JSON.stringify(listItems));
  // }

  return (
    <main>
      {/* <p>
        Hello {handleNameChange()}
      </p> */}
      {/* <p>Hello {name}!</p> */}
      {/* <button onClick={handleClick}> Clicked It</button> */}
      {/* <button onClick={handleNameChange}> Clicked It</button>
      <button onClick={()=>handleClick2('Dave')}> Clicked It</button>
      <button onClick={(e)=>handleClick3(e)}> Clicked It</button>    */}
      {items.length ?(
      <ul>
        {items.map((item)=>(
          <li className="item" key={item.id}>
            <input type="checkbox"
            onChange={()=>handleCheck(item.id)}
            checked={item.checked} />
            <label style={(item.checked) ? {textDecoration:'line-through'} :null } onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt
              onClick={()=>handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />  
          </li>
        ))}
      </ul>
      ):(
        <p style={{marginTop:'2rem'}}>Your list is empty</p>
      )}
    </main>
  )
}

export default Content
