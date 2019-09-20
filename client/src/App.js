import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BubblePage from './components/BubblePage';
import Private from './components/PrivateRoute';

import Login from './components/Login';
import './styles.scss';

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Private path="/bubbles_page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
