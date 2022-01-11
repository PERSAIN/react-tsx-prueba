import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './views/details';
import Home from './views/home';
import { useSelector, useDispatch } from 'react-redux';

const App: React.FC = (props) => {
  const data = useSelector((state) => console.log('este es el state', state));
  const dispatch = useDispatch();

  useEffect(() => {}, []);

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
