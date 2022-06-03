import { baseService } from "./baseService";

export class QuanLyNgDungService extends baseService{
    constructor(){
        super();
    }
    layDanhSachNgDung = () => {
        return this.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung');
    }
    themNguoiDung = (data) => {
        return this.post('/api/QuanLyNguoiDung/ThemNguoiDung',data);
    }
    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    }
    timKiemNguoiDung = (searchKey) => {
        return this.get2(`/api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${searchKey}`);
    }
    dangNhapNguoiDung = (tenDangNhap, matKhau) => {
        return this.get2(`/api/QuanLyNguoiDung/DangNhap?taiKhoan=${tenDangNhap}&matKhau=${matKhau}`)
    }
    dangKyTaiKhoan = (data) => {
        return this.post2('/api/QuanLyNguoiDung/DangKy',data);
    }
    dangNhapTaiKhoan = (data) => {
        return this.post2(`/api/QuanLyNguoiDung/login/`,data);
    }
}


export const quanLyNgDungService = new QuanLyNgDungService();