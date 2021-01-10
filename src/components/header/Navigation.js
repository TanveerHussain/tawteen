import * as React from 'react';
import {Link} from "react-router-dom";

class Navigation extends React.Component {

    render(){
        return (
            
        <div className="menu__container bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-8 col-lg-7 my-auto">
                        <nav>
                            <Link to="/">Job Seeker</Link>
                            <Link to="/" className="active">Employer</Link>
                        </nav>
                    </div>
                    <div className="col-4 col-lg-5 rightNav__container">
                        <nav>
                            <Link to="/">Training</Link>
                            <Link to="/">Career Guidance</Link>
                            <Link to="/">Initiatives</Link>
                        </nav>
                        <div className="profileHolder__container">
                            <Link to="/" className="profile__btn"><i className="fa fa-user-circle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
}

export default Navigation;