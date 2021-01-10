import * as React from 'react';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../src/sass/main.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Login from './components/login/Login';

class App extends React.Component {
    render(){
        return (
            
            <Login/>
            
        );
    }
}

export default App;
