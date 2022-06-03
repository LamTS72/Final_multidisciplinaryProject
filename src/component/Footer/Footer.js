import React from 'react'
import { NavLink } from 'react-router-dom';
import "./styleFooter.css";

export default function Footer() {

    let arrImgPartner = [{ src: "/img/cgv.png", path: "/" }, { src: "/img/bhd.png", path: "/" }, { src: "/img/galaxy.png", path: "/" }, { src: "/img/cinestar.png", path: "/" }, { src: "/img/cnx.jpg", path: "/" }, { src: "/img/lotte.png", path: "/" }, { src: "/img/megags.png", path: "/" }, { src: "/img/payoo.jpg", path: "/" }, { src: "/img/VCB.png", path: "/" }, { src: "/img/zalopay.png", path: "/" }]
    // hàm render hình ảnh đối tác
    const renderPartner = () => {
        return arrImgPartner.map((item, index) => {
            return <div className="col-3 mb-3" key={index}>
                <div className="img-animation">
                    <img className="img-partner" src={item.src} alt="movie" />
                    <NavLink to={item.path}>
                        <div className="animation-overlay"></div>
                    </NavLink>
                </div>
            </div>
        })
    }

    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="row infoMovie pb-3">
                    <div className="col-3">
                        <h6>Introduction</h6>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Payment Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h6>Coorporate Information</h6>
                        <div className="row">
                            {renderPartner()}
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-2">
                        <h6>Mobile App</h6>
                        <div className="row">
                            <div className="col-3">
                                <div className="img-animation">
                                    <img className="img-partner" src="/img/apple-logo2.png" alt="movie" />
                                    <NavLink to="/">
                                        <div className="animation-overlay"></div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="img-animation">
                                    <img className="img-partner" src="/img/android-logo2.png" alt="movie" />
                                    <NavLink to="/">
                                        <div className="animation-overlay"></div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <h6>Social</h6>
                        <div className="row">
                            <div className="col-3">
                                <div className="img-animation">
                                    <img className="img-partner" src="/img/facebook-logo2.png" alt="movie" />
                                    <NavLink to="/">
                                        <div className="animation-overlay"></div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="img-animation">
                                    <img className="img-partner" src="/img/zalo-logo2.png" alt="movie" />
                                    <NavLink to="/">
                                        <div className="animation-overlay"></div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <NavLink to="/">
                            <img className="footer-logo" src="/img/logo-login.png" alt="movie" />
                        </NavLink>
                    </div>
                    <div className="col-8">
                        <h6 className="mb-0">HAHALAND CINEMA @</h6>
                        <p>Address: 22 CMT8 Street, Ward 2, District Tan Binh, HCM City, Vietnam</p>
                        <p>Business Registration Certificate: 0123456789</p>
                        <p>Hotline: 0888 555 114</p>
                        <a href="#">Email: support@hahalandcinema.vn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
