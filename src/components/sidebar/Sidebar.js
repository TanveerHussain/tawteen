import * as React from 'react';
import {Link, NavLink} from "react-router-dom";

class Sidebar extends React.Component {

    render(){
        return (
            
        <aside className="sidebar">
            <ul> 
                <li><NavLink  to="/" activeClassName="active"><i className="far fa-chart-bar"></i> Dashboard</NavLink></li>
                <li><NavLink  to="/MyCareer" activeClassName="active"><i className="far fa-user-circle"></i> My Career</NavLink></li>
                <li>
                    <NavLink  to="/MyBusiness" activeClassName="active"><i className="fa fa-briefcase"></i> My Business {/*<i className="fa fa-angle-down"></i>*/}</NavLink>
                    {/* <ul className="subMenu__sidebar">
                        <li><a href="javascript:;"><i className="fas fa-caret-right"></i> Workforce Plan</a></li>
                        <li><a href="javascript:;"><i className="fas fa-caret-right"></i> My Jobs</a></li>
                        <li><a href="javascript:;"><i className="fas fa-caret-right"></i> My Companies</a></li>
                    </ul> */}
                </li>
            </ul>
        </aside>
        
        );
    }
}

export default Sidebar;