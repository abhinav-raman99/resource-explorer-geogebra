import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import DetailsView from "./pages/DetailsView";
import ListView from "./pages/ListView";
import NotFound from "./pages/NotFound";

function App() {
   return (
      <div className="w-100 mw8 center sans-serif">
         <Header />
         <BrowserRouter>
            <Switch>
               <Route path="/details/">
                  <DetailsView />
               </Route>
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
