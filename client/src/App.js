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
  const [ count, setCount ] = useState(0);
  const [ recipes, setRecipes ] = useState([{}]);
  const [urlChanged, setUrlChanged] = useState(false);

  useEffect(() => {
      setCount(0);
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
                              setCount(1);
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
            <Route path="/" element={<Home featuredRecipe={featured} recipes={recipes}  />} default/>
            <Route path="/recipes" element={<List featuredRecipe={featured} recipes={recipes} setUrlChanged={setUrlChanged} />} />
          <Route path="/recipes/edit/:id" element={<Edit count={count} setCount={setCount} setFeaturedRecipe={setFeatured} featuredRecipe={featured} recipes={recipes} setRecipes={setRecipes} urlChanged={urlChanged} />} />
            <Route path="/new-recipe" element={<CreateNew count={count} setCount={setCount} featuredRecipe={featured} recipes={recipes} setRecipes={setRecipes} />} />
            <Route path="/recipes/details/:id" element={<Details featuredRecipe={featured} recipes={recipes}  />} />
          </Routes>
        </BrowserRouter>
      : null}
    </div>
  );
}

export default App;
