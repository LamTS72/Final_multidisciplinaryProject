import React from 'react';
import { NavLink } from 'react-router-dom';
import './styleMedia.css';


export default function Media(props) {

    let arrNewsFilm = [
        { src: '/img/news-lat-mat.png', title: 'Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất', content: 'Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn thót tim fans hâm mộ.', path: 'https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat' },
        { src: '/img/news-mortal-kombat.png', title: '[MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA...', content: 'Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng không thiếu những tác phẩm đình đám được chuyển thể từ tiểu thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.', path: 'https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam' },
        { src: '/img/news-woman.png', title: 'PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và màn trả thù', content: 'Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim', path: 'https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi' },
        { src: '/img/news-ban-tay-diet-quy.png', title: 'VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT QUỶ”...', content: 'Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo Sik, tác phẩm kinh dị – hành động...', path: 'https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em' },
        { src: '/img/news-vo3.jpg', title: "'Vợ ba' và câu chuyện của những người đàn bà trong 'tổ kén'", content: 'Dựa trên những câu chuyện có thật về thân phận người phụ nữ Việt Nam trong xã hội xưa, phim cũng đề cập đến các vấn đề của xã hội lúc đó như hôn nhân sắp đặt, tục đa thê, trọng nam khinh nữ.', path: 'https://tuoitre.vn/vo-ba-va-cau-chuyen-cua-nhung-nguoi-dan-ba-trong-to-ken-20190513091705955.htm' }
    ]
    let arrReviews = [
        { src: '/img/review-1.jpg', title: '[Review] Thiên Thần Hộ Mệnh: Victor Vũ Và Nỗ Lực Trẻ Hóa "Vũ Trụ Bùa Ngải"', content: 'Thiên Thần Hộ Mệnh phức tạp, nhiều twist và rõ nhất là trẻ hơn!', path: 'https://www.galaxycine.vn/binh-luan-phim/review-thien-than-ho-menh-victor-vu-va-no-luc-tre-hoa-vu-tru-bua-ngai' },
        { src: '/img/review-2.jpg', title: '[Review] Trạng Tí: Một Bộ Phim Đầy Sáng Tạo!', content: 'Do một số vấn đề ở khâu sản xuất, Trạng Tí phải chịu nhiều chỉ trích từ khi chưa ra rạp chiếu phim.', path: 'https://www.galaxycine.vn/binh-luan-phim/review-trang-ti-mot-bo-phim-day-sang-tao' },
        { src: '/img/review-3.jpg', title: '[Review] Lật Mặt 5: Chờ Đợi Kỷ Lục Mới Của Lý Hải', content: 'Phần mới nhất của series Lật Mặt đã chính thức ra mắt khán giả trên toàn quốc. Liệu phim có tiếp nối được thành...', path: 'https://www.galaxycine.vn/binh-luan-phim/review-lat-mat-5-cho-doi-ky-luc-moi-cua-ly-hai' },
        { src: '/img/review-4.jpg', title: '[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?', content: 'Mortal Kombat tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh...', path: 'https://www.galaxycine.vn/binh-luan-phim/review-mortal-kombat-ky-xao-man-nhan-nhung-lieu-co-xung-tam-bom-tan' }
    ]
    let arrPromotion = [
        {src:'/img/khuyenmai-1.jpg',title:'NHANH TAY ĐẶT VÉ, NHẬN QUÀ LIỀN TAY',content:'Rất nhiều quà tặng hấp dẫn đang chờ các bạn tại Vie Cinema',path:'/'},
        {src:'/img/khuyenmai-2.png',title:'NHANH TAY ĐẶT VÉ, NHẬN QUÀ LIỀN TAY',content:'Rất nhiều quà tặng hấp dẫn đang chờ các bạn tại Vie Cinema',path:'/'},
        {src:'/img/khuyenmai-3.jpg',title:'NHANH TAY ĐẶT VÉ, NHẬN QUÀ LIỀN TAY',content:'Rất nhiều quà tặng hấp dẫn đang chờ các bạn tại Vie Cinema',path:'/'},
        {src:'/img/khuyenmai-4.jpg',title:'NHANH TAY ĐẶT VÉ, NHẬN QUÀ LIỀN TAY',content:'Rất nhiều quà tặng hấp dẫn đang chờ các bạn tại Vie Cinema',path:'/'},
        {src:'/img/khuyenmai-5.jpg',title:'NHANH TAY ĐẶT VÉ, NHẬN QUÀ LIỀN TAY',content:'Rất nhiều quà tặng hấp dẫn đang chờ các bạn tại Vie Cinema',path:'/'},
        {src:'/img/khuyenmai-6.jpg',title:'NHANH TAY ĐẶT VÉ, NHẬN QUÀ LIỀN TAY',content:'Rất nhiều quà tặng hấp dẫn đang chờ các bạn tại Vie Cinema',path:'/'}
    ]

    // hàm render reviews
    const renderReviews = () => {
        return arrReviews.map((item, index) => {
            return <div className="row mb-3" key={index}>
                <div className="col-1"></div>
                <div className="col-3">
                    <div className="img-animation">
                        <img className="w-100 d-block" src={item.src} alt="movie" />
                        {/* <NavLink to={item.path}>
                            <div className="animation-overlay"></div>
                        </NavLink> */}
                        <a href={item.path} target="_blank" >
                            <div className="animation-overlay"></div>
                        </a>
                    </div>
                </div>
                <div className="col-8">
                    {/* <NavLink to={item.path}>
                        <h6 className="content-title">{item.title}</h6>
                        <p className="content-review">{item.content}</p>
                        <div className="btn-review btn btn-warning text-white mt-5">Chi tiết</div>
                    </NavLink> */}
                    <a href={item.path} target="_blank" >
                        <h6 className="content-title">{item.title}</h6>
                        <p className="content-review">{item.content}</p>
                        <div className="btn-review btn btn-warning text-white mt-5">Detail</div>
                    </a>
                </div>
            </div>
        })
    }
    // hàm render khuyễn mãi
    const renderPromotion = (num1,num2) => {
        return arrPromotion.slice(num1,num2).map((item,index)=>{
            return <div className="col-4" key={index}>
            <div className="img-animation">
                <NavLink to={item.path}>
                    <img src={item.src} className="d-block w-100" alt="movie" />
                    <div className="animation-overlay">
                        <h4>{item.title}</h4>
                        <h6>{item.content}</h6>
                    </div>
                </NavLink>
            </div>
        </div>
        })
    }

    return (
        <div className="media" id="media">
            <div className="container" style={{ width: '70%' }}>
                <ul className="nav nav-pills pills-tab-movie mb-5" id="pills-tab-media" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-blog-tab-media" data-toggle="pill" href="#pills-blog-media" role="tab" aria-controls="pills-blog-media" aria-selected="true">Movie Blogs</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-review-tab-media" data-toggle="pill" href="#pills-review-media" role="tab" aria-controls="pills-review-media" aria-selected="false">Reviews</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-promotion-tab-media" data-toggle="pill" href="#pills-promotion-media" role="tab" aria-controls="pills-promotion-media" aria-selected="false">On Sales</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent-media">
                    {/* render tin tức */}
                    <div className="tab-pane fade show active" id="pills-blog-media" role="tabpanel" aria-labelledby="pills-blog-tab-media">
                        <div className="row">
                            {arrNewsFilm.slice(0, 2).map((item, index) => {
                                return <div className="col-6" key={index}>
                                    <div className="card">
                                        <div className="img-animation">
                                            <img className="card-img-top w-100" src={item.src} alt="movie" />
                                            {/* <NavLink to={item.path}>
                                                <div className="animation-overlay"></div>
                                            </NavLink> */}
                                            <a href={item.path} target="_blank">
                                                <div className="animation-overlay"></div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            {/* <NavLink to={item.path}>
                                                <h5 className="card-title">{item.title}</h5>
                                            </NavLink> */}
                                            <a href={item.path} target="_blank">
                                                <h5 className="card-title">{item.title}</h5>
                                            </a>
                                            <p className="card-text">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="row mt-4">
                            {arrNewsFilm.slice(2).map((item, index) => {
                                return <div className="col-4" key={index}>
                                    <div className="card">
                                        <div className="img-animation">
                                            <img className="card-img-top w-100" src={item.src} alt="movie" />
                                            {/* <NavLink to={item.path}>
                                                <div className="animation-overlay"></div>
                                            </NavLink> */}
                                            <a href={item.path} target="_blank">
                                                <div className="animation-overlay"></div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            {/* <NavLink to={item.path}>
                                                <h5 className="card-title">{item.title}</h5>
                                            </NavLink> */}
                                            <a href={item.path} target="_blank">
                                                <h5 className="card-title">{item.title}</h5>
                                            </a>
                                            <p className="card-text">{item.content}</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                    {/* render Reviews */}
                    <div className="tab-pane fade" id="pills-review-media" role="tabpanel" aria-labelledby="pills-review-tab-media">
                        {renderReviews()}
                    </div>
                    {/* render Khuyễn mãi */}
                    <div className="tab-pane fade" id="pills-promotion-media" role="tabpanel" aria-labelledby="pills-promotion-tab-media">
                        <div id="carouselMediaControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        {renderPromotion(0,3)}   
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        {renderPromotion(3,6)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
