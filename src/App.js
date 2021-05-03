import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route path="/covid19france" exact component={Home} />
              <Route path="/a-propos" exact component={About} />
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>

  );
};

export default App;

