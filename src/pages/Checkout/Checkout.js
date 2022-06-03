import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { layChiTietPhongVe, themLichSuAction } from '../../action/FilmAction';
// su dung thu vien lodash
import _ from 'lodash';
import { USER_LOGIN } from '../../util/setting';
import { Redirect } from 'react-router';
import { datVeAction } from '../../action/UserAction';
import { layThongTinAction } from '../../action/UserAction';
// su dung thu vien icon cua antdesign
import { UserAddOutlined } from '@ant-design/icons'
import { DAT_GHE } from '../../action/types/FilmType';
import Footer from '../../component/Footer/Footer';
import { history } from '../../App';
import "./styleCheckout.css";


export default function Checkout(props) {

    const dispatch = useDispatch();
    const {chiTietPhongVe, danhSachGheDangDat, danhSachGheReturned } = useSelector(state => state.FilmReducer);
    const {thongTinTaiKhoan} = useSelector(state => state.UserReducer)
    // lấy User đăng nhập từ redux về
    const { userLogin } = useSelector(state => state.UserReducer)
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;
    useEffect(() => {

        // lấy id từ url
        let maLichChieu = props.match.params.id;
        const action = layChiTietPhongVe(maLichChieu);
        dispatch(action);
    }, [])

    // kiểm tra đăng nhập rồi mới cho thao tác
    if (!localStorage.getItem(USER_LOGIN)) {
        alert('ban can phai dang nhap');
        return <Redirect to='/login' />
    }
    // if (!userLogin.username){
    //     alert("You have to login first !");
    //     return <Redirect to='/login' />
    // }

    // render ra hệ thống ghế ngồi
    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            // moi lan render ra 1 ghe dem kiem tra xem cos trung voi ghe dang dat ko
            let classGheDangDat = '';
            let classGheMinhDat = '';
            if (ghe.taiKhoanNguoiDat === userLogin.username) {
                classGheMinhDat = 'gheMinhDat';
            }

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat';
            }

            return <Fragment key={index}>
                <button onClick={() => {
                    const action = { type: DAT_GHE, ghe: ghe, user: userLogin };
                    dispatch(action);
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheMinhDat}`}>
                    {classGheMinhDat === '' ? ghe.stt : <UserAddOutlined />}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    const refreshPage = () => {
        window.location.reload();
    }

    return (
    <div className="check-out-page">
        <div className="container mb-5">
            <div className="row">
                <div className="col-8 mt-5">
                    <div className="text-center">
                        <img className="w-100" src="/img/screen.png" alt="movie" />
                        {renderGhe()}
                    </div>
                    <div className="row ml-2 mt-4">
                        <div className="col-3">
                            <button className="ghe gheDaDat align-middle"></button>
                            <span>Booked Seat</span>
                        </div>
                        <div className="col-3">
                            <button className="ghe gheVip align-middle"></button>
                            <span>VIP Seat</span>
                        </div>
                        <div className="col-3">
                            <button className="ghe gheDangDat align-middle"></button>
                            <span>Being Selected Seat</span>
                        </div>
                        <div className="col-3">
                            <button className="ghe gheMinhDat align-middle"></button>
                            <span>Selected Seat</span>
                        </div>
                    </div> 
                    <div className="row ml-2 mt-2">
                        <div className="col-6">
                            <button className="ghe align-middle"></button>
                            <span>Available Seat</span>
                        </div>
                    </div> 
                </div>
                <div className="col-4 mt-5">
                    <div className="text-warning text-center display-4">{danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                        return tongTien += gheDD.giaVe;
                    }, 0).toLocaleString()} VND</div>
                    <hr />
                    <div className="thongTinPhim">
                        <p>Movie name: <span className="checkout-text-info">{thongTinPhim?.tenPhim}</span> </p>
                        <p>Location: <span className="checkout-text-info">{thongTinPhim?.diaChi} - {thongTinPhim?.tenCumRap}</span> </p>
                        <p>Showing date: <span className="checkout-text-info">{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</span> </p>
                    </div>
                    <hr />
                    <div className="my-2">
                        <div className="row">
                            <div className="col-12">
                                Seat: {_.sortBy(danhSachGheDangDat, ['maGhe']).map((gheDangDat, index) => {
                                    return <span key={index} className="checkout-text-info">{gheDangDat.stt} </span>
                                })}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-2">
                        <p>Email: <span className="checkout-text-info">{userLogin.email}</span></p>
                        <hr />
                        <p>Phone number: <span className="checkout-text-info">{userLogin.soDt}</span></p>
                    </div>
                    <hr />
                    {/* <NavLink exact to ='/payment' style={{width: '100%'}} className="btn btn-danger">PAYMENT</NavLink> */}
                    <div className="checkout-button-buy" onClick={() => {
                        var danhSachGheLichSu = []
                        for (var item of danhSachGheDangDat) {
                            for (var chair of chiTietPhongVe.danhSachGhe){
                                if (item.maGhe == chair.maGhe) {
                                    chair.taiKhoanNguoiDat = userLogin.username;
                                    chair.daDat = true;
                                }
                            }
                            danhSachGheLichSu.push(item['tenGhe'])
                        }
                        let thongTinDatVe = {
                            'maLichChieu': chiTietPhongVe.thongTinPhim.maLichChieu,
                            'danhSachGhe': chiTietPhongVe.danhSachGhe
                        }
                        let thongTinLichSu = {}
                        if (danhSachGheLichSu){
                            thongTinLichSu = {
                                'giaVe': danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                    return tongTien += gheDD.giaVe;
                                }, 0),
                                'danhSachMaGhe': danhSachGheLichSu.toString(),
                                'lichChieu': chiTietPhongVe.thongTinPhim.maLichChieu

                            }
                        }else{
                            thongTinLichSu = {
                                'giaVe': danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                    return tongTien += gheDD.giaVe;
                                }, 0),
                                'danhSachMaGhe': [],
                                'lichChieu': chiTietPhongVe.thongTinPhim.maLichChieu

                            }
                        }
                        if (danhSachGheDangDat.length > 0){
                            dispatch(datVeAction(thongTinDatVe));
                            dispatch(themLichSuAction(thongTinLichSu));
                            dispatch(layThongTinAction())
                            let a = {...thongTinTaiKhoan}
                            // console.log("TTTK: ",{...thongTinTaiKhoan})
                            // console.log("Item: ",a[0].giaVe)
                            // history.replace(`/payment/${props.match.params.id}`);
                        }else {
                            let a = thongTinTaiKhoan
                            console.log("TTTK: ",a)
                            let i = Object.keys(a).length
                            while(i > 0){
                                console.log("Item: ",a[Object.keys(a).length-i].giaVe)
                                i-=1               
                            }
                            // console.log("Item: ",a[0].giaVe)
                            alert('You have to choose seat !!!')
                        };
                    }}> 
                        <div className="display-5 py-2" >BOOK TICKET</div>
                    </div>
                    
                    <div className="checkout-button-buy mt-3" onClick={()=>{
                        history.replace(`/u`);
                    }}>
                        <div className="display-5 py-2">BOOKING DETAIL</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}
