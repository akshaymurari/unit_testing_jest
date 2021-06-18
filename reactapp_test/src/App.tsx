import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import Main from "./Components/Main/Main";

export const graphql = "http://localhost:8000/graphql";

function App() {
  return (
    <div className="App"  >
      <Switch>
        <Route path="/" exact component={Auth}></Route>
        <Route path="/main" exact component={Main}></Route>
        <Route path="/events" exact component={()=><>in main</>}></Route>
        <Route path="/bookings" exact component={()=><>in main</>}></Route>
        <Route path="/error" exact component={()=><h1>in error page</h1>}></Route>
      </Switch>
    </div>
  );
}

export default App;
