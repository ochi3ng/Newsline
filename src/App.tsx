import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Body } from './app/Body';
import { Navbar } from './app/NavBar';
import { World } from './app/World';
import { MoreDetails } from './app/MoreDetails';
import { Home } from './app/Home';


function App() {
  return (
    <div>
      <Navbar/>
      <div className='header'>
      <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/world' element={<World/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/more' element={<MoreDetails/>}/>
    </Routes>
      </div>
    </div>
    // <div className="App">
    // <Navbar/>
    //   <Body/>
    //     <Counter/>
    // </div>
        
  );
}

export default App;
