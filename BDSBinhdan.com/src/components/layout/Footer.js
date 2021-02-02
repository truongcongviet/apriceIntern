import React, { Component } from 'react';
import '../banner.css';
    
class Footer extends Component{
    render(){
        return(
            <div>
                  <footer>
                    <div class="mt-3 text-center position-relative content">
                        
                        <h4 class="mb-2">CÔNG TY CP SÀN GIAO DỊCH APRICE (APRICE JSC)</h4>
                        <p class="mb-2"><b>Trụ sở chính:</b> Thủ Thiêm Lake View 1, Đường ven hồ trung tâm, Phường An Khánh, Q2, TP.HCM - <b>Điện
                                thoại:</b> (028) 6686 5466 - <b>Email:</b> info@bdsbinhdan.vn</p>
                        <p><b>Giấy ĐKKD số:</b> 0315379952, cấp bởi Sổ Kế Hoạch và Đầu Tư TPHCM ngày 08/11/2018</p>
                    </div>
                    <div class="position-relative image">
                        <img class="float-right position-relative" src="images/icon_bo_cong_thuong.png" alt=""/>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;