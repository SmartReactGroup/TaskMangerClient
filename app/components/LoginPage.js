import React, { Component } from 'react';
import styles from './Login.css';

export default class LoginPage extends Component{
    render() {
        return (
            <div className={styles.container}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <ul className="nav justify-content-center">
                            <li className={styles.navItem} data-tclass="nav-item">
                                <a className="nav-link active" href="#" data-toggle="tab">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="tab">Register</a>
                            </li>
                        </ul>
                        <hr className={styles.loginHr}/>
                    </div>
                    <div className="panel-body">
                        <form role="form">
                            <div className="form-group">
                                <label>Username: </label>
                                    <input className="form-control" type="text" />                      
                            </div>
                            <div className="form-group">
                                <label>Password: </label>
                                    <input className="form-control" type="password" />    
                            </div>
                            <div className="checkbox c-checkbox">
                                <label>
                                    <input type="checkbox" defaultChecked="true" /> Remember me
                                </label>
                            </div>
	                        <button type="submit" className={`btn btn-lg btn-primary btn-block ${styles.btnLogin}`}>Login in</button>
                        </form>
                    </div>
                </div>                                              
            </div>
        )
    }
}