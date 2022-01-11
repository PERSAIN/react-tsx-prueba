import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './views/details';
import Home from './views/home';
import { useSelector } from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";


const App: React.FC = (props) => {
  const data = useSelector((state) => console.log('este es el state', state));

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/details' element={<Details />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
