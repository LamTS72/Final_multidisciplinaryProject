import React from 'react';
import { NavLink } from 'react-router-dom';
import "./styleMainApp.css";

export default function MainApp(props) {

    return (
        <div className="mainApp" id="mainApp">
            <div className="container">
                <div className="app-movie row">
                    <div className="app-content col-6">
                        <h2 className="text-white">Convenient applications for people who love movies</h2>
                        <h6 className="text-white mt-4">Not only for ticket booking, film reviewing, rating and discounts are also available.</h6>
                        <div className="app-btn btn btn-danger mt-4">
                            {/*... đường dẫn tới trang tải App */}
                            <NavLink to="/">
                                <h4 className="text-white mb-1">Free App - Download now !</h4>
                            </NavLink>
                        </div>
                        <h6 className="text-white mt-4">HAHALAND has 2 versions for <a className="text-danger" href="#">iOS</a> and <a className="text-danger" href="#">Android</a></h6>

                    </div>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <div className="app-slide">
                            <div id="carouselAppSlidesOnly" className="carousel slide" data-ride="carousel" data-touch="true">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/img/app-slide1.jpg" className="d-block w-100" alt="movie" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/img/app-slide2.jpg" className="d-block w-100" alt="movie" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/img/app-slide3.jpg" className="d-block w-100" alt="movie" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/img/app-slide4.jpg" className="d-block w-100" alt="movie" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/img/app-slide5.jpg" className="d-block w-100" alt="movie" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/img/app-slide6.jpg" className="d-block w-100" alt="movie" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/img/app-slide7.jpg" className="d-block w-100" alt="movie" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/img/app-slide8.jpg" className="d-block w-100" alt="movie" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
