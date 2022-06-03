import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { ScrollView } from "@cantonjs/react-scroll-view";
import SanPham from './SanPham';
import GioHang from './GioHang';
import './styleCategory.css';

export default class Category extends Component {
    dataProduct = [
      {
        maSP: 1,
        tenSP: "Blueberry Cupcake",
        giaBan: 12.99,
        hinhAnh: "./img/blueberry-cupcake.jpeg",
      },
      {
        maSP: 2,
        tenSP: "Blackberry Cupcake",
        giaBan: 10.99,
        hinhAnh: "./img/blackberry-cupcake.jpeg",
      },
    ];
  
    state = {
      sanPhamChiTiet: {
        maSP: 1,
        tenSP: "Blueberry Cupcake",
        giaBan: 12.99,
        hinhAnh: "./img/blueberry-cupcake.jpeg",
      }, // state luôn có dữ liệu mặc định ban đầu
  
      gioHang:[
        // {maSP: '1', tenSP: 'Iphone', giaBan: 1000, soLuong: 2, hinhAnh: 'https://picsum.photos/201'},
        // {maSP: '2', tenSP: 'Iphone2', giaBan: 2000, soLuong: 2, hinhAnh: 'https://picsum.photos/200'},
      ]
    };
  
    // Hàm setState sẽ được định nghĩa tại component chứa state đó 
    setStateThemGioHang = (sanPhamClick) => {
      // Từ sản phẩm người dùng click tạo ra 1 object giống object trong giỏ hàng 
      const spGioHang = {...sanPhamClick,soLuong: 1}
  
      // Dựa vào sản phẩm được click thêm vào mảng giỏ hàng
      let gioHangCapNhat = this.state.gioHang;
      // gioHangCapNhat.push(spGioHang);
      // Kiểm tra sản phẩm click có trong giỏ hàng hay không
      let index = gioHangCapNhat.findIndex(sp => sp.maSP === sanPhamClick.maSP);
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      }else{ 
        // Không tìm thấy
        gioHangCapNhat.push(spGioHang);
      }
      this.setState({
        gioHang: gioHangCapNhat
      })
    }
  
    setStateXoaSanPham = (maSPXoa) =>{
      // console.log(maSPXoa);
      let gioHangCapNhat = this.state.gioHang;
      let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSPXoa);
      if (index !== -1){
          gioHangCapNhat.splice(index,1);
      }
      this.setState({
        gioHang: gioHangCapNhat
      })
    }

    tinhTongTien = () => {
        let tongTien = 0;
        for (let spGH of this.state.gioHang){
            tongTien += (spGH.giaBan * spGH.soLuong);
        }
        return tongTien;
      }
  
    tangGiamSoLuong = (maSP, soLuong) =>{
      console.log("ma sp",maSP);
      console.log("so luong", soLuong);
      let gioHangCapNhat = this.state.gioHang;
      // Tìm sản phẩm bấm nút + hoặc - dựa vào mã sản phẩm
      let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
      if (index !== -1){
        if ((gioHangCapNhat[index].soLuong > 1 && soLuong < 0) || soLuong > 0){
          gioHangCapNhat[index].soLuong += soLuong;
        }else{
          alert('Số lượng tối thiểu phải là 1');
        }
      }
      this.setState({
        gioHang : gioHangCapNhat
      })
    }
  
    renderSanPham = () => {
      return this.dataProduct.map((sanpham, index) => {
        return (
          <div className="col-4" key={index}>
              <SanPham sanpham = {sanpham} xemChiTiet = {this.xemChiTiet} themGioHang = {this.setStateThemGioHang} />
            {/* <div className="card text-white bg-dark">
              <img
                className="card-img-top bg-white"
                height={350}
                src={sanpham.hinhAnh}
                alt={sanpham.tenSP}
              />
              <div className="card-body">
                <h4 className="card-title">{sanpham.tenSP}</h4>
                <p className="card-text">{sanpham.giaBan.toLocaleString()}</p>
                <button className="btn btn-success m-1" onClick = {()=>{
                    this.xemChiTiet(sanpham);
                }}>Xem chi tiết</button>
                <button className="btn btn-danger m-1">Thêm giỏ hàng</button>
              </div>
            </div> */}
          </div>
        );
      });
    };
  
    xemChiTiet = (sanpham) =>{
        console.log(sanpham);
        // Gọi setState giống hàm changeColor của bài tập chọn xe
        this.setState({
            sanPhamChiTiet : sanpham
        })
    }
  
    render() {
      return (
        <div>
          
            <div className="row container-fluid">
                <div className="col-8">
                    <nav className="container">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-link active text-danger" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cupcake</a>
                        <a class="nav-link text-danger" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Sea food</a>
                        <a class="nav-link text-danger" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Juice</a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div class="container">
                                <div class="row">
                                    {this.renderSanPham()}
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    </div>
                </div>
                <div className="col-4">
                    {/* <h2 className="text-danger">Your Cart (5)</h2> */}
                    {/* <ScrollView style={{ height: '70vh' }}>
                        <GioHang tangGiamSoLuong={this.tangGiamSoLuong} gioHang = {this.state.gioHang} themGioHang = {this.setStateThemGioHang} xoaSanPham = {this.setStateXoaSanPham}/>
                    </ScrollView> */}
                    <div className="row">
                        <div className="col-6">
                            <h3>Total:</h3>
                        </div>
                        <div className="col-6">
                            <h2 className="text-danger">${this.tinhTongTien()}</h2>
                            <p style={{fontSize: '14px'}}>[VAT 10% = $9.79]</p>
                        </div>
                        <div className="col-12">
                            <NavLink exact to ="/payment" style={{width: '100%'}} className="btn btn-danger">PAYMENT</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

// export default function Category(props){
//     let handleEndReached = () => {
//         console.log("load more");
//     };

//     let dataProduct = [
//         {
//             maSP: 1,
//             tenSP: "Blueberry Cake",
//             hinhAnh: "./img/blueberry-cupcake.jpeg",
//             giaBan: 12.99
//         },
//         {
//             maSP: 2,
//             tenSP: "Strawberry Cake",
//             hinhAnh: "./img/blackberry-cupcake.jpeg",
//             giaBan: 12.99
//         },

//     ];

//     let state = {
//         sanPhamChiTiet: {
//             maSP: 1,
//             tenSP: "Blueberry Cake",
//             hinhAnh: "./img/blueberry-cupcake.jpeg",
//             giaBan: 12.99
//         },
//         gioHang: [

//         ]
//     }

//     let setStateThemGioHang = (sanPhamClick) => {
//         // Từ sản phẩm người dùng click tạo ra 1 object giống object trong giỏ hàng 
//         const spGioHang = {...sanPhamClick,soLuong: 1}
    
//         // Dựa vào sản phẩm được click thêm vào mảng giỏ hàng
//         let gioHangCapNhat = state.gioHang;
//         // gioHangCapNhat.push(spGioHang);
//         // Kiểm tra sản phẩm click có trong giỏ hàng hay không
//         let index = gioHangCapNhat.findIndex(sp => sp.maSP === sanPhamClick.maSP);
//         if (index !== -1) {
//           gioHangCapNhat[index].soLuong += 1;
//         }else{ 
//           // Không tìm thấy
//           gioHangCapNhat.push(spGioHang);
//         }
//         this.setState({
//           gioHang: gioHangCapNhat
//         })
//     }

//     let setStateXoaSanPham = (maSPXoa) =>{
//         // console.log(maSPXoa);
//         let gioHangCapNhat = this.state.gioHang;
//         let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSPXoa);
//         if (index !== -1){
//             gioHangCapNhat.splice(index,1);
//         }
//         this.setState({
//           gioHang: gioHangCapNhat
//         })
//     }
    
//     let tangGiamSoLuong = (maSP, soLuong) =>{
//         console.log("ma sp",maSP);
//         console.log("so luong", soLuong);
//         let gioHangCapNhat = this.state.gioHang;
//         // Tìm sản phẩm bấm nút + hoặc - dựa vào mã sản phẩm
//         let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
//         if (index !== -1){
//           if ((gioHangCapNhat[index].soLuong > 1 && soLuong < 0) || soLuong > 0){
//             gioHangCapNhat[index].soLuong += soLuong;
//           }else{
//             alert('Số lượng tối thiểu phải là 1');
//           }
//         }
//         this.setState({
//           gioHang : gioHangCapNhat
//         })
//     }

//     let xemChiTiet = (sanpham) =>{
//         console.log(sanpham);
//         // Gọi setState giống hàm changeColor của bài tập chọn xe
//         this.setState({
//             sanPhamChiTiet : sanpham
//         })
//     }
    
//     let renderSanPham = () => {
//         return dataProduct.map((sanpham,index)=>{
//             return (
//                 <div class="col-4" key={index}>
//                     <SanPham sanpham= {sanpham} xemChiTiet = {xemChiTiet} themGioHang = {setStateThemGioHang} />
//                 </div>
//             )
//         })
//     }
    

//    return (
//     <div className="row container-fluid">
//         <div className="col-8">
//             <nav className="container">
//                 <div class="nav nav-tabs" id="nav-tab" role="tablist">
//                 <a class="nav-link active text-danger" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Cupcake</a>
//                 <a class="nav-link text-danger" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Sea food</a>
//                 <a class="nav-link text-danger" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Juice</a>
//                 </div>
//             </nav>
//             <div class="tab-content" id="nav-tabContent">
//                 <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
//                     <div class="container">
//                         <div class="row">
//                             {renderSanPham()}
//                             {/* <div class="col-4">
//                                 <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
//                                     <img style={{height: '15rem'}} src="./img/brownie-cupcake.jpeg" class="card-img-top w-100" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Brownie</h5>
//                                         <div className="row">
//                                             <div className="col-5">
//                                                 <p class="card-text align-center">$9.99</p>
//                                             </div>
//                                             <div className="col-7 text-center">
//                                                 <a href="#" class="btn btn-danger">Add to cart</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-4">
//                                 <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
//                                     <img style={{height: '15rem'}} src="./img/cream-cupcake.jpeg" class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Cream Cupcake</h5>
//                                         <div className="row">
//                                             <div className="col-5">
//                                                 <p class="card-text align-center">$9.99</p>
//                                             </div>
//                                             <div className="col-7 text-center">
//                                                 <a href="#" class="btn btn-danger">Add to cart</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-4">
//                                 <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
//                                     <img style={{height: '15rem'}} src="./img/red-velvet-cupcake.jpeg" class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Red Velvet Cupcake</h5>
//                                         <div className="row">
//                                             <div className="col-5">
//                                                 <p class="card-text align-center">$9.99</p>
//                                             </div>
//                                             <div className="col-7 text-center">
//                                                 <a href="#" class="btn btn-danger">Add to cart</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-4">
//                                 <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
//                                     <img style={{height: '15rem'}} src="./img/lemon-cupcake.jpeg" class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Lemon Cupcake</h5>
//                                         <div className="row">
//                                             <div className="col-5">
//                                                 <p class="card-text align-center">$7.99</p>
//                                             </div>
//                                             <div className="col-7 text-center">
//                                                 <a href="#" class="btn btn-danger">Add to cart</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-4">
//                                 <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
//                                     <img style={{height: '15rem'}} src="./img/blackberry-cupcake.jpeg" class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Blackberry Cupcake</h5>
//                                         <div className="row">
//                                             <div className="col-5">
//                                                 <p class="card-text align-center">$12.99</p>
//                                             </div>
//                                             <div className="col-7 text-center">
//                                                 <a href="#" class="btn btn-danger">Add to cart</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col-4">
//                                 <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
//                                     <img style={{height: '15rem'}} src="./img/blueberry-cupcake.jpeg" class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title">Blueberry Cupcake</h5>
//                                         <div className="row">
//                                             <div className="col-5">
//                                                 <p class="card-text align-center">$12.99</p>
//                                             </div>
//                                             <div className="col-7 text-center">
//                                                 <a href="#" class="btn btn-danger">Add to cart</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
                        
                        
                        
//                         </div>
//                     </div>
//                 </div>
//                 <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
//                 <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
//             </div>    
//         </div>
//         <div className="col-4">
//             <h2 className="text-danger">Your Cart (5)</h2>
//             <ScrollView style={{ height: '70vh' }}>
//                 <GioHang tangGiamSoLuong={tangGiamSoLuong} gioHang = {state.gioHang} themGioHang = {setStateThemGioHang} xoaSanPham = {setStateXoaSanPham}/>
//             <div className="row py-2">

//                 <div className="col-2">
//                     <img src="./img/blueberry-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
//                 </div>
//                 <div className="col-8">
//                     <h5>Blueberry Cupcake</h5>
//                     <div className="row">
//                         <div className="col-8">
//                             <div className="btn btn-danger mr-2">+</div>
//                                     1
//                             <div className="btn btn-danger ml-2">-</div>
//                         </div>
//                         <div className="col-4">
//                             $12.99
//                             <p style={{fontSize: '12px'}}>[VAT 10%]</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row py-2">
//                 <div className="col-2">
//                     <img src="./img/blackberry-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
//                 </div>
//                 <div className="col-8">
//                     <h5>Blackberry Cupcake</h5>
//                     <div className="row">
//                         <div className="col-8">
//                             <div className="btn btn-danger mr-2">+</div>
//                                     3
//                             <div className="btn btn-danger ml-2">-</div>
//                         </div>
//                         <div className="col-4">
//                             $38.97
//                             <p style={{fontSize: '12px'}}>[VAT 10%]</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row py-2">
//                 <div className="col-2">
//                     <img src="./img/cream-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
//                 </div>
//                 <div className="col-8">
//                     <h5>Cream Cupcake</h5>
//                     <div className="row">
//                         <div className="col-8">
//                             <div className="btn btn-danger mr-2">+</div>
//                                     1
//                             <div className="btn btn-danger ml-2">-</div>
//                         </div>
//                         <div className="col-4">
//                             $9.99
//                             <p style={{fontSize: '12px'}}>[VAT 10%]</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row py-2">
//                 <div className="col-2">
//                     <img src="./img/cream-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
//                 </div>
//                 <div className="col-8">
//                     <h5>Cream Cupcake</h5>
//                     <div className="row">
//                         <div className="col-8">
//                             <div className="btn btn-danger mr-2">+</div>
//                                     1
//                             <div className="btn btn-danger ml-2">-</div>
//                         </div>
//                         <div className="col-4">
//                             $9.99
//                             <p style={{fontSize: '12px'}}>[VAT 10%]</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row py-2">
//                 <div className="col-2">
//                     <img src="./img/cream-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
//                 </div>
//                 <div className="col-8">
//                     <h5>Cream Cupcake</h5>
//                     <div className="row">
//                         <div className="col-8">
//                             <div className="btn btn-danger mr-2">+</div>
//                                     1
//                             <div className="btn btn-danger ml-2">-</div>
//                         </div>
//                         <div className="col-4">
//                             $9.99
//                             <p style={{fontSize: '12px'}}>[VAT 10%]</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row py-2">
//                 <div className="col-2">
//                     <img src="./img/cream-cupcake.jpeg" style={{width:'4rem', height:'4rem'}}/>
//                 </div>
//                 <div className="col-8">
//                     <h5>Cream Cupcake</h5>
//                     <div className="row">
//                         <div className="col-8">
//                             <div className="btn btn-danger mr-2">+</div>
//                                     1
//                             <div className="btn btn-danger ml-2">-</div>
//                         </div>
//                         <div className="col-4">
//                             $9.99
//                             <p style={{fontSize: '12px'}}>[VAT 10%]</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </ScrollView>
//             <div className="row">
//                 <div className="col-6">
//                     <h3>Total:</h3>
//                 </div>
//                 <div className="col-6">
//                     <h2 className="text-danger">$100.89</h2>
//                     <p style={{fontSize: '14px'}}>[VAT 10% = $9.79]</p>
//                 </div>
//                 <div className="col-12">
//                     <NavLink to="/payment" style={{width: '100%'}} className="btn btn-danger">PAYMENT</NavLink>
//                 </div>
//             </div>
//         </div>
//     </div>
//    ) 
// }

