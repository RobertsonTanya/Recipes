import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import CreateNew from './components/CreateNew';
import Details from './components/Details';

import './styles/App.css';


function App() {
  const [ featured, setFeatured ] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home featured={featured} setFeatured={setFeatured}  />} default/>
          <Route path="/new-recipe" element={<CreateNew featured={featured} />} />
          <Route path="/recipes/details/:id" element={<Details featured={featured} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
