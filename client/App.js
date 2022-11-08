import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';

const App = () => {
  return (
    <div className='router'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
