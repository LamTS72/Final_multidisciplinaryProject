import React from 'react';
import "./styleModal.css";

export default function Modal(props) {
    return (
        <div className="modalMovie">
            {/* MODAL CAROUSEL */}
            <div className="modal fade" id="trailerMovieModal1" tabIndex="-1" aria-hidden="true">
                <div className=" modal-dialog modal-dialog-centered">
                    <div className="modal-content modalCarousel">
                        <iframe style={{width:'100%',height:'525px'}} src="https://www.youtube.com/embed/kBY2k3G6LsM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="trailerMovieModal2" tabIndex="-1" aria-hidden="true">
                <div className=" modal-dialog modal-dialog-centered">
                    <div className="modal-content modalCarousel">
                        <iframe style={{width:'100%',height:'525px'}} src="https://www.youtube.com/embed/phhQ6pYYk5w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="trailerMovieModal3" tabIndex="-1" aria-hidden="true">
                <div className=" modal-dialog modal-dialog-centered">
                    <div className="modal-content modalCarousel">
                        <iframe style={{width:'100%',height:'525px'}} src="https://www.youtube.com/embed/l2XBzUZidig" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
