import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './views/details';
import Home from './views/home';
const App = () => {
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
