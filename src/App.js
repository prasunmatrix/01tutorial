// import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "one half pound of bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

  const [newItem, setNewItem] = useState('')

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shopping', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    //console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shopping', JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    console.log('submitted')
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
