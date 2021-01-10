import * as React from 'react';
import fire from '../../firebaseConfig'

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            login:'',
            password:''
        }
    }

    handleLoginChange =(event) =>{
        this.setState({
            login: event.target.value
        })
    }

    handlePasswordChange =(event) =>{
        this.setState({
            password: event.target.value
        })
    }

    submitLogin = () => {
        fire.auth().signInWithEmailAndPassword(this.state.login, this.state.password).then((success) => {
            alert('successfully loged in');
        }).catch((error) => {
            alert('login fail');
        })
    }

    submitRegister= () => {
        fire.auth().createUserWithEmailAndPassword(this.state.login, this.state.password).then((success) => {
            alert('user registered');
        }).catch((error) => {
            alert('user could not be register');
        })
    }

    render(){
        return (
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-md-10 col-lg-8 col-xl-5">
                        <div className="text-center mb-3"><h2>LOGIN</h2></div>
                        <div className="border loginForm">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="text" name="email" onChange={this.handleLoginChange} className="form-control" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="email" onChange={this.handlePasswordChange} className="form-control" />
                            </div>
                            {/* <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" onClick={this.submitLogin} className="btn btn-success btn-block">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;