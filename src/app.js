import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListView from './pages/ListView';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="w-100 mw8 center pa3 sans-serif">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <ListView />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
