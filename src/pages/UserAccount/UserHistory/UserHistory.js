import React,{memo} from 'react';
import { NavLink } from 'react-router-dom';
import "../styeUserAccount.css";


function UserHistory(props) {
    
    // render Trang chi tiết lịch sử đặt vé
    const renderVeDaDat = () => {
        return (props.thongTinTaiKhoanUpdate.arrVe)?.map((item, index) => {
            // do không có đủ dữ liệu từ API nên hình ảnh và địa chỉ sẽ được render tĩnh
            var linkQR = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + item.maQR
            return <div className="row mb-4" key={index}>
                <div className="col-3">
                    <div className="img-animation">
                        <img className="card-img-top w-100" src={linkQR} alt="movie" />
                        {/* <h6 className="text-white text-center mt-3">Tên phim {index}</h6>
                        <h6 className="text-white text-center mt-3">{item.tenPhim}</h6> */}
                        <NavLink to="/">
                            <div className="animation-overlay"></div>
                        </NavLink>
                    </div>
                </div>
                <div className="col-8 chiTietRap">
                    <h4 className='text-white mt-3'>{item.tenPhim}</h4>
                    <h7 className="text-white text-center mt-3">Tên Rạp: {item.tenRap}</h7><br></br>
                    <h7 className="text-white text-center mt-3">Ngày Chiếu: {item.ngayChieu}</h7><br></br>
                    <h7 className="text-white text-center mt-3">Suất: {item.gioChieu}</h7><br></br>
                    <h7 className="text-white text-center mt-3">Giá vé: {item.giaVe.toLocaleString()}</h7><br></br>
                    <h7 className="text-white text-center mt-3">Danh sách mã ghế: {item.danhSachMaGhe.split(",").join(", ")}</h7>
                </div>
            </div>
        }) 
    }

    return (
        <div className="chiTietVe">
            {renderVeDaDat()}
        </div>
    )
}

// sử dụng memo tối ưu perfomance
export default memo(UserHistory);
