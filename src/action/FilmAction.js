import { quanLyPhimService } from '../services/QuanLyPhimService';
import { SET_CHI_TIET_CUM_RAP, SET_CHI_TIET_PHIM_THEO_NGAY, SET_CHI_TIET_PHONG_VE, SET_FILM, SET_FILM_DETAIL,TIM_KIEM_PHIM } from './types/FilmType';
import { history } from '../App';


export const getApiFilmAction = (maNhom) =>{
    return async (dispatch) =>{
        try {
            var result = await quanLyPhimService.layDanhSachPhim(maNhom);
            // sau khi lay du lieu tu API ve dua len redux
            const action = {
                type:SET_FILM,
                dataFilms: result.data
            }
            dispatch(action)
        } catch (errors) {
            console.log('errors', errors.response?.data);
        }
    }
}


export const getFilmDetailAction = (maPhim) => {
    return async dispatch => {
        try{
            const result = await quanLyPhimService.layChiTietPhim(maPhim);    
            // dua du lieu len redux
            dispatch({
                type:SET_FILM_DETAIL,
                thongTinChiTiet:result.data
            })

        }catch(err){
            console.log(err.response?.data)
        }
    }
}

export const layChiTietPhongVe = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await quanLyPhimService.layChiTietPhongVe(maLichChieu);
            // dua du lieu len redux
            dispatch({
                type: SET_CHI_TIET_PHONG_VE,
                chiTietPhongVe:result.data
            })   
        }catch (err){
            console.log(err.response?.data);
        }
    }
}

export const layChiTietLichChieuNgay = (maNhom) => {
    return async dispatch => {
        try {
            const result = await quanLyPhimService.layChiTietPhimTheoNgay(maNhom);
            // dua du lieu len redux
            dispatch({
                type: SET_CHI_TIET_PHIM_THEO_NGAY,
                thongTinLichChieuNgay:result.data
            })   
        }catch (err){
            console.log(err.response?.data);
        }
    }
}

export const timKiemPhimAction = (tenPhim) => {
    return async dispatch => {
        try{
            const result = await quanLyPhimService.timKiemPhim(tenPhim);
            
            // đưa dữ liệu lên redux
            dispatch({
                type:TIM_KIEM_PHIM,
                danhSachPhimTimKiem: result.data
            })
           

        }catch (err){
            alert(err.response?.data)
        }
    }
}

export const themPhimAction = (formData) =>{
    return async dispatch =>{
        try{
            const result = await quanLyPhimService.themPhim(formData);
            alert('Thêm phim thành công !');
            // quay về trang phim
            history.replace("/admin/films");
        }catch (err){
            console.log(err.response?.data)
        }
    }
}

export const themLichSuAction = (formData) =>{
    return async dispatch =>{
        try{
            const result = await quanLyPhimService.themLichSu(formData);
        }catch (err){
            console.log(err.response?.data)
        }
    }
}


export const xoaPhimAction = (maPhim) => {
    return async dispatch =>{
        try{
            const result = await quanLyPhimService.xoaPhim(maPhim);
            alert('Xóa phim thành công !');

            // load lại trang
            dispatch(getApiFilmAction("GP01"));
        }catch (err){
            console.log(err.response?.data)
            alert(err.response?.data)
        }
    }
}

export const layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return async dispatch => {
        try{
            const result = await quanLyPhimService.layThongTinCumRapTheoHeTHong(maHeThongRap);
            dispatch({
                type: SET_CHI_TIET_CUM_RAP,
                danhSachHeThongRap: result.data
            })
        }catch(error){
            console.log('error',error.response?.data);
        }
    }

}

export const themLichChieuAction = (formData) =>{
    return async dispatch => {
        try{
            const result = await quanLyPhimService.themLichChieu(formData);
            alert('Thêm lịch chiếu thành công !');
        }catch(error){
            console.log(error.response?.data);
        }
    }
}

export const capNhatPhimAction = (formData) => {
    return async dispatch =>{
        try{
            const result = await quanLyPhimService.capNhatPhim(formData);
            alert('Cập nhật phim thành công !');
            // quay lại quản lý phim
            history.replace("/admin/films");
            // load lại trang
            dispatch(getApiFilmAction("GP01"));
            
        }catch (err){
            console.log(err.response?.data)
            alert(err.response?.data)
        }
    }
}