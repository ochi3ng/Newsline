import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Body } from './app/Body';
import { Navbar } from './app/NavBar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Body/>}/>
    </Routes>
    </div>
    // <div className="App">
    // <Navbar/>
    //   <Body/>
    //     <Counter/>
    // </div>
        
  );
}

export default App;
