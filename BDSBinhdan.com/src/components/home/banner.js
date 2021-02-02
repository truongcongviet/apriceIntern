import React, { Component } from 'react';
import location from '../images/location.png';
import search from '../images/search.png';
import background from '../images/banner.png';
import '../banner.css';

class Banner extends Component{
    render(){
        return(
            <div>
                <div className="banner-home" style={{backgroundImage: `url(${background})`}}>
                    <div >
                        <div className="col-12 text-center text-white p-4 mb-5">
                            <h1>SÀN GIAO DỊCH BẤT ĐỘNG SẢN</h1>
                            <p className="font-size-5">Đăng tin mua bán, cho thuê bất động sản chuyên nghiệp</p>
                        </div>
                    </div>
                <div/>

                <div className="mb-lg-4">
                    <div className="col-sm-12 col-md-8 m-auto">
                        
                            <div className="input-group mb-3 rounded">
                                <div className="input-group-prepend rounded-left">
                                    <button className="btn btn-sm btn-primary m-2 rounded font-weight-bold">MUA BÁN</button>
                                    <button className="btn btn-sm btn-white m-2 rounded font-weight-bold">CHO THUÊ</button>
                                </div>
                                <div className="input-group-append">
                                    <span className="input-group-text border-right-0"><img src={location}
                                        className="icon-location" alt=""/></span>
                                </div>
                                <input type="text" className="form-control shadow-none border-left-0 search"
                                    aria-label="Amount (to the nearest dollar)" placeholder="Tất cả bất động sản..."/>
                                <div className="input-group-append">
                                    <span className="input-group-text  rounded-right"><img src={search} alt=""/></span>
                                </div>
                                <div className="input-group-append ml-3 bg-white rounded add">
                                    {/* <button className="btn btn-outline-primary font-weight-bold d-flex align-items-center rounded"/> */}
                                    <ul className="dots p-1 ml-3 mt-3 d-flex">
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                    </ul> 
                                    <p>Thêm</p>

                                <div/>
                            </div>
                       
                    </div>
                </div>
                <div className="col-sm-12 m-auto text-center pt-5 w-50">
                    <p className="text-black mt-5 pt-3">Bdsbinhdan.vn - @ 2021 Aprice</p>
                    <img className="w-25" src="images/badge_appstore.png" alt=""/>
                    <img  className="w-25 ml-1" src="images/badge_google_plat.png" alt=""/>
                </div>
            </div>
            </div>
        
    
            </div>
        );
    }
}
export default Banner;