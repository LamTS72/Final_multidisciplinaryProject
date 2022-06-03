import { baseService } from "./baseService";


export class QuanLyPhimService extends baseService {
    constructor(){
        super();
    }
    layDanhSachPhim = (maNhom) => {
       return this.get2(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`);
    }
    layChiTietPhim = (maPhim) => {
        return this.get2(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
    }
    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    layChiTietPhimTheoNgay = (maNhom) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`)
    }
    timKiemPhim = (tenPhim) => {
        return this.get2(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`)
    }
    themPhim = (data) => {
        return this.post('/api/QuanLyPhim/ThemPhimUploadHinh',data);
    }
    themLichSu = (data) => {
        return this.post('/api/QuanLyLichSu/Them',data);
    }
    layThongTinCumRapTheoHeTHong = (maHeThongRap) => {
        return this.get2(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }
    themLichChieu = (data) => {
        return this.post('/api/QuanLyDatVe/TaoLichChieu',data);
    }
    xoaPhim = (maPhim) => {
        return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
    }
    capNhatPhim = (formData) => {
        return this.post('/api/QuanLyPhim/CapNhatPhimUpload',formData);
    }
}

export const quanLyPhimService = new QuanLyPhimService();