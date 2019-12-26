import React from "react";
import "./App.css";
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';


const HatsPage = (props) => {
  console.log(props)
  return <h3>Hats Page</h3>
}


function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shop/hats' component={HatsPage}/>
    </Switch>

    </div>
  );
}

export default App;
