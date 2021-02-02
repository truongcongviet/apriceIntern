import React, { Component } from 'react';
import images from '../images/logo.png';
import '../header.css';

class Header extends Component{
    
    render(){
        
        return(
            <div className="header d-flex justify-content-between">
            
                    <div className="logo d-flex">
                        <img className ="h-75 mt-2" src={images} />
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse font-weight-normal" id="navbarNav">
                                <ul className="navbar-nav align-items-center">
                                <li className="nav-item active mx-3">
                                    <a className="nav-link" href="#">TIN TỨC</a>
                                </li>
                                <li className="nav-item active mx-3">
                                    <a className="nav-link" href="#">HƯỚNG DẪN</a>
                                </li>
                                <li className="nav-item active mx-auto">
                                    <a className="nav-link" href="#">ĐĂNG NHẬP</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-sm btn-primary border-white"> <i className="fas fa-plus"></i> ĐĂNG TIN</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-sm btn-primary   ml-0 border-white"><i className="fas fa-caret-down"></i> </button>
                                </li>
                            </ul>
                            </div>
                    </nav>
              
            </div>
        );
    }
}
export default Header;