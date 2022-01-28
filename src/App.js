import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarSection from './component/navbar';
import Login from './component/login';
import Registe from './component/register';
import Fav from './component/fav';
import Movies from './component/movies';
import Series from "./component/series";
import MovieDetails from "./component/movieDetails";
import NotFound from "./component/notfound";


function App() {
  return (
    <BrowserRouter>
    <NavbarSection />
    <div className="container py-5">
      <Switch>
        <Route path={"/"} exact component={Movies} />
        <Route path={"/Series"} exact component={Series} />
        <Route path={"/Fav"} exact component={Fav} />
        <Route path={"/Registe"} exact component={Registe} />
        <Route path={"/details/:id"} exact component={MovieDetails} />
        <Route path={"/Login"} exact component={Login} />
        <Route path={'*'} exact component={NotFound} />

      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
