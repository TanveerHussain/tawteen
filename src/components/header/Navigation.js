import * as React from 'react';


class Navigation extends React.Component {

    render(){
        return (
            
        <div className="menu__container">
            <div className="container">
                <div className="row">
                    <div className="col-8 col-lg-7 my-auto">
                        <nav>
                            <a href="#">Job Seeker</a>
                            <a href="#" className="active">Employer</a>
                        </nav>
                    </div>
                    <div className="col-4 col-lg-5 rightNav__container">
                        <nav>
                            <a href="#">Training</a>
                            <a href="#">Career Guidance</a>
                            <a href="#">Initiatives</a>
                        </nav>
                        <div className="profileHolder__container">
                            <a href="#" className="profile__btn"><i className="fa fa-user-circle"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
}

export default Navigation;