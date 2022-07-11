import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import CreateNew from './components/CreateNew';
import Details from './components/Details';
import List from './components/List';
import Edit from './components/Edit';

import './styles/App.css';


function App() {
  const [ featured, setFeatured ] = useState({});
  const [ recipes, setRecipes ] = useState({});

  useEffect(() => {
      axios.get(`http://localhost:8000/api/recipes`)
          .then(res => {
            console.log(res.data);
            setRecipes(res.data);
            if(res && res.data && res.data.length){
              for(let i=0; i<res.data.length; i++){
                  if(res.data[i].featured === true){
                      console.log('more', res.data[i]._id);
                      axios.get(`http://localhost:8000/api/recipes/${res.data[i]._id}`)
                          .then(resp => {
                              console.log(resp.data);
                              setFeatured(resp.data);
                          })
                          .catch(err => { console.log(err)})
                  }
              }
            }
          })
          .catch(err => { console.log(err)})
  }, []);


  return (
    <div className="App">
      {recipes ?
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home featured={featured} recipes={recipes}  />} default/>
            <Route path="/recipes" element={<List featured={featured} recipes={recipes}  />} />
            <Route path="/recipes/edit/:id" element={<Edit featured={featured} recipes={recipes}  />} />
            <Route path="/new-recipe" element={<CreateNew featured={featured} recipes={recipes} setRecipes={setRecipes} />} />
            <Route path="/recipes/details/:id" element={<Details featured={featured} recipes={recipes}  />} />
          </Routes>
        </BrowserRouter>
      : null}
    </div>
  );
}

export default App;
