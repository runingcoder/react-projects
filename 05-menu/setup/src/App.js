import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';


function App() {
  // get unique categories as an array,
  // then map through the array and return a button for each category
  // then add onClick event to each button
  const category1 = ['all', ...new Set(items.map((item) => item.category))]
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];

  const  [ menuItems, setMenuItems ] = useState(items);
  const [ categories, setCategories ] = useState(allCategories);

  const filterItems = (category) =>{
    if (category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems =  items.filter((item)=>
    item.category === category)
      setMenuItems(newItems);
  }

  // useEffect(()=>{
  //   filterItems()
  // },[])

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>

        </div>
        <Categories filterItems = {filterItems} categories = {categories}  />
        <Menu items={menuItems} />
        </section>
  </main>
}

export default App;
