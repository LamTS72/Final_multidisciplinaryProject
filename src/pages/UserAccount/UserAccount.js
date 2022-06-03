import React, { useEffect, useState,useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinTaiKhoan, layThongTinAction } from '../../action/UserAction';
import Footer from '../../component/Footer/Footer';
import UserHistory from './UserHistory/UserHistory';
import { Modal,Button } from 'react-bootstrap';
import { HIDE_MODAL } from '../../action/types/FilmType';
import "./styeUserAccount.css";


export default function UserAccount(props) {

    const dispatch = useDispatch();
    const { thongTinTaiKhoan, userLogin, show } = useSelector(state => state.UserReducer);
    const [number, setNumber] = useState(1);
    const [click,setClick] = useState(1);
    const [state, setState] = useState({
        values: {
            email: userLogin.email,
            hoTen: userLogin.hoTen,
            soDT: userLogin.soDT,
            taiKhoan: userLogin.taiKhoan,
            matKhau: '******',
            maLoaiNguoiDung: userLogin.maLoaiNguoiDung

        },
        errors: {
            email: '',
            hoTen: '',
            soDT: '',
            matKhau: '',
        }

    });
    useEffect(() => {
        const action = layThongTinAction()
        dispatch(action);
    }, [])
    // delete thongTinTaiKhoan.loaiNguoiDung; // do API bị lỗi trường này nên bỏ ra
    let arrVe = []
    const thongTinTaiKhoanUpdate = { arrVe: thongTinTaiKhoan, maLoaiNguoiDung: userLogin.maLoaiNguoiDung }; // thêm vào trường MLND lấy giá trị từ userLogin để update
    // dùng useCallback để chỉ render lại trang useHistory khi người dùng click vào xem
    const callBackThongTinTaiKhoanUpdate = useCallback(thongTinTaiKhoanUpdate,[click]);

    

    // set values khi click lấy thông tin
    useEffect(() => {
        setState({
            values: thongTinTaiKhoanUpdate
        })
    }, [number, ])

    // hàm onChange

    // xử lí đóng modal
    const handleClose = () => {
        let action = {
            type: HIDE_MODAL
        }
        dispatch(action)
    };
    
    let a = {...thongTinTaiKhoan}

    return (
        
        <div className="user-account-page" style={{ background: 'url(/img/bg-login.jpg) 100% 100%' }}>
            <div className="user-account" >
                <div className="container pb-5">
                    <ul className="nav nav-pills pills-tab-movie mb-4" id="pills-tab-user" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="pills-home-tab-user" data-toggle="pill" href="#pills-home-user" role="tab" aria-controls="pills-home-user" aria-selected="true">Lịch sử đặt vé</a>
                        </li>
                    </ul>
                    <div className="tab-pane show active" id="pills-home-user" role="tabpanel" aria-labelledby="pills-home-tab-user">
                        <UserHistory thongTinTaiKhoanUpdate={callBackThongTinTaiKhoanUpdate} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


