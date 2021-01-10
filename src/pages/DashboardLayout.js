import * as React from 'react';
import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../../src/sass/main.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Sidebar from '../components/sidebar/Sidebar'
import Dashboard from '../pages/Dashboard'
import MyCareer from '../pages/MyCareer'
import MyBusiness from '../pages/MyBusiness'

class App extends React.Component {
    render(){
        return (
            <Router>
                <div className="GridParent">
                    <Header/>
                    <div className="middle position-relative">
                        <div className="container h-100">
                            <section className="main__section h-100">
                                <Sidebar/>
                                <main>
                                    <div className="px-4">
                                        <Switch>
                                            <Route exact path="/">
                                                <Dashboard />
                                            </Route>
                                            <Route path="/MyCareer">
                                                <MyCareer />
                                            </Route>
                                            <Route path="/MyBusiness">
                                                <MyBusiness />
                                            </Route>
                                        </Switch>
                                    </div>
                                </main>
                            </section>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
