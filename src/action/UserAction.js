import axios from 'axios';
import {history} from '../App';
import { ACCESSTOKEN, USER_LOGIN, DOMAIN } from '../util/setting';
import { layChiTietPhongVe } from './FilmAction';
import { displayLoadingActon, hideLoadingActon } from './LoadingAction';
import { DANG_NHAP, SET_USER, THONG_TIN_TAI_KHOAN, TIM_KIEM_USER, XOA_DANH_SACH_GHE_DANG_DAT} from './types/FilmType';
import { quanLyNgDungService } from '../services/QuanLyNgDungService';




export const layDanhSachNgDungAction = () =>{
    return async (dispatch) =>{
        try {
            const result = await quanLyNgDungService.layDanhSachNgDung();
            // sau khi lay du lieu tu API ve dua len redux
            const action = {
                type:SET_USER,
                dataUsers: result.data
            }
            dispatch(action)
        } catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}

// export const dangKyAction = (thongTinNguoiDung) => {
//     return async dispatch => {
//         try {
//             const result = await axios({
//                 url:`${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
//                 method:'POST',
//                 data: thongTinNguoiDung
//             });
//             history.push('/login'); // chuyen ve trang chu
//             alert('Your account has been successfully registed! Please login to use our website ... ');

//         }catch (err) {
//             // alert(err.response?.data);
//             // dispatch(hideLoadingActon);
//             console.log("!!!: ",err.response?.data)
//         }
//     }
// }

export const dangKyAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await quanLyNgDungService.dangKyTaiKhoan(thongTinNguoiDung);
            localStorage.setItem(ACCESSTOKEN,result.data.key)
            history.push('/login'); // chuyen ve trang chu
            alert('Your account has been successfully registed! Please login to use our website ... ');

        }catch (err) {
            // alert(err.response?.data);
            // dispatch(hideLoadingActon);
            console.log("!!!: ",err.response?.data)
        }
    }
}

export const dangNhapAction = (thongTinDangNhap) => {
    return async dispatch => {
        try {
            const result = await quanLyNgDungService.dangNhapTaiKhoan(thongTinDangNhap);
            // dua len Reducer
            dispatch({
                type:DANG_NHAP,
                userLogin:result.data
            })
            // luu du lieu vao LocalStorage
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(ACCESSTOKEN, result.data.key);
            // dong thoi quay lai trang truoc do
            history.goBack();

        } catch (err) {
            alert( "Lỗi: Tài Khoản hoặc Mật Khẩu không đúng",err.response?.data)
        }
    }
}

// export const dangNhapAction = (thongTinDangNhap) => {
//     return async dispatch => {
//         try {
//             const result = await quanLyNgDungService.dangNhapNguoiDung(thongTinDangNhap.taiKhoan, thongTinDangNhap.matKhau);
//             // dua len Reducer
//             dispatch({
//                 type:DANG_NHAP,
//                 userLogin:result.data
//             })
//             // luu du lieu vao LocalStorage
//             localStorage.setItem(ACCESSTOKEN, result.data.ID);
//             // dong thoi quay lai trang truoc do
//             history.goBack();
//             // history.push('/'); 

//         } catch (err) {
//             alert( "Lỗi: Tài Khoản hoặc Mật Khẩu không đúng",err.response?.data)
//         }
//     }
// }

export const datVeAction = (thongTinDatVe) =>{
    return async dispatch => {
        // hien thi loading khi bam nut dat ve
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyDatVe/DatVe/${thongTinDatVe.maLichChieu}`,
                method:'PUT',
                data:thongTinDatVe,
            });
            // goi Action xoa ghe
            await dispatch({
                type:XOA_DANH_SACH_GHE_DANG_DAT
            });
            
            // sau khi dat ve xong goi lai action load lai phong ve, va tat loading di
            await dispatch(layChiTietPhongVe(thongTinDatVe.maLichChieu));
        }  
        catch (err) {
            alert("Lỗi: ",err.response?.data);
        }
    }
}



// export const layThongTinAction = (taiKhoan)=>{
//     return async dispatch => {
//         try{
//             const result = await axios({
//                 url:`${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
//                 method:'POST',
//                 data:{taiKhoan:taiKhoan},

//                 // phan nay de API xac nhan da dang nhap
//                 headers:{
//                     'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
//                 }
//             });
//             // gửi thông tin lên redux
//             dispatch({
//                 type:THONG_TIN_TAI_KHOAN,
//                 thongTinTaiKhoan:result.data
//             })

//         }catch (err){
//             alert(err.response?.data);
//         }
//     }
// }

export const layThongTinAction = ()=>{
    return async dispatch => {
        try{
            const result = await axios({
                url:`${DOMAIN}/api/LichSuDatVe`,
                method:'GET',

                // phan nay de API xac nhan da dang nhap
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            });
            // gửi thông tin lên redux
            dispatch({
                type:THONG_TIN_TAI_KHOAN,
                thongTinTaiKhoan: result.data
            })
            

        }catch (err){
            alert(err.response?.data);
        }
    }
}


export const capNhatThongTinTaiKhoan = (thongTinTaiKhoan) => {
    return async dispatch => {
        try{
            const result = await axios({
                url:`${DOMAIN}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method:'PUT',
                data:thongTinTaiKhoan,

                // phan nay de API xac nhan da dang nhap
                headers:{
                    'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
                }
            });
            // load lai trang
            dispatch(layThongTinAction(thongTinTaiKhoan.taiKhoan));
            alert('Cập nhật thông tin thành công!');

        }catch (err){
            
            alert(err.response?.data);
        }
    }
}

export const themNguoiDungAction = (data) => {
    return async dispatch => {
        try{
            const result = await quanLyNgDungService.themNguoiDung(data);
            alert ('Thêm người dùng thành công');
            // quay về trang user
            history.replace('/admin/users');

        }catch (err) {
            alert(err.response.data)
        }
    }
}

export const timKiemNguoiDungAction = (searchKey) => {
    return async dispatch => {
        try{
            const result = await quanLyNgDungService.timKiemNguoiDung(searchKey);
            // đưa dữ liệu lên store
            dispatch({
                type: TIM_KIEM_USER,
                danhSachNguoiDungTimKiem: result.data
            })

        }catch (err){
            alert (err.response.data)
        }
    }
}

export const xoaNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        try{
            const result = await quanLyNgDungService.xoaNguoiDung(taiKhoan);
            alert('Xóa thành công!');
            // load lai trang
            dispatch(layDanhSachNgDungAction());

        }catch (err){
            alert(err.response.data);
        }
    }
}