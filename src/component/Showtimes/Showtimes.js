import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietLichChieuNgay } from '../../action/FilmAction';
import TabMenuShowtimes from './TabMenuShowtime';


export default function Showtimes(props) {

    const dispatch = useDispatch();
    const {thongTinLichChieuNgay} = useSelector(state=>state.FilmReducer);
    console.log(thongTinLichChieuNgay)
    useEffect(() => {
        dispatch(layChiTietLichChieuNgay("GP01"));
        
    }, [])

    return (
        <div className="container mt-5">
            <h3>Thông tin lịch chiếu</h3>
            <div>
                {/* <TabMenuShowtimes listRapChieu = {thongTinLichChieuNgay}/> */}
            </div>
        </div>
    )
}
