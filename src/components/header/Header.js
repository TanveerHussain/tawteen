import * as React from 'react';
import mohreLogo from '../../images/mohrelogo.png';
import tawteenLogo from '../../images/tawteenlogo.png';

import Nagivation from '../header/Navigation';


class Header extends React.Component {

    render(){
        return (
            
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <img src={mohreLogo} className="img-fluid mohreLogo" alt=""/>
                        </a>
                    </div>
                    <div className="co-md-6 col-lg-8 my-auto text-md-start">
                        <div className="d-flex">
                            <div className="topNavAction__container">
                                <nav>
                                    <a href="#"><i className="fas fa-search"></i></a>
                                    <a href="#"><i className="fas fa-cog"></i></a>
                                    <a href="#">Arabic</a>
                                </nav>
                            </div>
                            <div className="createJob__container">
                                <a href="#" className="btn btn-outline-primary createJob__btn">Create a Job</a>
                            </div>
                            <a href="#" className="d-inline">
                                <img src={tawteenLogo} className="img-fluid tawteenLogo" alt=""/>
                            </a>
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