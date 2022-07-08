import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import CreateNew from './components/CreateNew';
import Details from './components/Details';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} default/>
          <Route path="/new-recipe" element={<CreateNew />} />
          <Route path="/recipes/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
