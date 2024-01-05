import React from 'react';
import NewPage from './NewPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//change the url to see the page 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="NewPage" Component={NewPage}/>
      </Routes>
    </Router>
  );
}

export default App;
