import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css"
import PostItem from "./components/PostItem";
import Footer from "./components/Footer";
import {Component, Component2} from "./components/Components"



function App() {
  const [value, setValue] = useState('TEXT IN INPUT')
  
  return (
    <div className="App">
      <Component/>
      <Component2/>
      <h2>{value}</h2>
      <input 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Counter/>
      <PostItem post={{id: 1, title: 'Javascript', description: 'Javascript - это язык программирования'}}/>
      <PostItem post={{id: 2, title: 'Javascript', description: 'Javascript - это язык программирования'}}/>
      <PostItem post={{id: 3, title: 'Javascript', description: 'Javascript - это язык программирования'}}/>
      <PostItem post={{id: 4, title: 'Javascript', description: 'Javascript - это язык программирования'}}/>
      <PostItem post={{id: 5, title: 'Javascript', description: 'Javascript - это язык программирования'}}/>
      <Footer content={{title: 'Footer', body: 'This is footer'}}/>
    </div>
  );
}

export default App;
