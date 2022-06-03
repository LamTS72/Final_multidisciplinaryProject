import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { timKiemPhimAction } from '../../action/FilmAction';
import { NavLink } from 'react-router-dom';
import Footer from '../../component/Footer/Footer';
import "./styleSearch.css";


export default function Search(props) {

    const dispatch = useDispatch();
    let { arrFilm } = useSelector(state => state.FilmReducer);
    let searchKey = props.match.params.id;
    useEffect(() => {

        // đưa lên API
        dispatch(timKiemPhimAction(searchKey));
    })
    // render danh sách phim tìm thấy
    const renderPhimSearch = () => {
        return arrFilm?.map((item, index) => {
            return <div className="col-lg-6 col-sm-12 d-flex mb-4" key={index}>
                <div className="">
                    <div style={{width: '200px', height: '300px'}} className="img-animation">
                        <img className="card-img-top w-100 h-100" src={item.hinhAnh} alt="movie" />
                        <NavLink to={`/detail/${item.maPhim}`}>
                            <div className="animation-overlay"></div>
                        </NavLink>
                    </div>
                    <div className="text-center mt-4 mb-4">
                        <h6 className="text-white">{item.tenPhim}</h6>
                        <p className="text-white">Release date: {item.ngayKhoiChieu.slice(0, 10)}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <>
            <div id="listFilmSearch" className="listFilmSearch">
                <div className="search-content container">
                    <h5 id="text-notice-search" className="text-danger mt-4">{arrFilm.length} result found for keyword: {searchKey}</h5>
                    <div className="row mt-4">
                        {renderPhimSearch()}
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
