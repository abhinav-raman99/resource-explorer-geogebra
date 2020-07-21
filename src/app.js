import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ListView from './pages/list-view';

function App() {
  return (
    <div className="w-100 mw8 center pa3 sans-serif">
      <BrowserRouter>
        <Route path="/" exact>
          <ListView/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
