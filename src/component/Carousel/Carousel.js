import React from "react";
import "./styleCarousel.css";

export default function Carousel() {
    return (
        <div id="carouselMovieControls" className="carousel carousel-fade slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/ban-tay-diet-quy.png" className="img-carousel" alt="movie" />
                    <div className="carousel-caption">
                        <button className="icon-play" type="button" data-toggle="modal" data-target="#trailerMovieModal2">
                            <img src="/img/play-video.png" alt="movie" />
                        </button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/lat-mat-48h.png" className="img-carousel" alt="movie" />
                    <div className="carousel-caption">
                        <button className="icon-play" type="button" data-toggle="modal" data-target="#trailerMovieModal1">
                            <img src="/img/play-video.png" alt="movie" />
                        </button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/trang-ti.jpg" className="img-carousel" alt="movie" />
                    <div className="carousel-caption">
                        <button className="icon-play" type="button" data-toggle="modal" data-target="#trailerMovieModal3">
                            <img src="/img/play-video.png" alt="movie" />
                        </button>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselMovieControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselMovieControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
