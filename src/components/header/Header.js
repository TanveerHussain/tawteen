import * as React from 'react';
import {Link} from "react-router-dom";

import mohreLogo from '../../images/mohrelogo.png';
import tawteenLogo from '../../images/tawteenlogo.png';
import mainlogo from '../../images/reactlogo.png';
import Nagivation from '../header/Navigation';


class Header extends React.Component {

    render(){
        return (
            
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 my-auto">
                        <Link to="/" className="logoHolder">
                            <h1>LOGO</h1>
                        </Link>
                    </div>
                    <div className="co-md-6 col-lg-8 my-auto text-md-start">
                        <div className="d-flex">
                            <div className="topNavAction__container">
                                <nav>
                                    <Link to="/"><i className="fas fa-search"></i></Link>
                                    <Link to="/"><i className="fas fa-cog"></i></Link>
                                    <Link to="/">Arabic</Link>
                                </nav>
                            </div>
                            <div className="createJob__container">
                                <Link to="/" className="btn btn-outline-info createJob__btn"><i className="far fa-user"></i> Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nagivation/>
        </header>
        
        );
    }
}

export default Header;