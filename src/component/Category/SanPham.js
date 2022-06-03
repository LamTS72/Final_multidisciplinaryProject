import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let {sanpham} = this.props;
    return (
      <div>
            <div class="card" style={{display: 'block', width: '18rem', transitionDuration: '0.3s', height: '23rem'}}>
                <img style={{height: '15rem'}} src={sanpham.hinhAnh} class="card-img-top w-100" alt={sanpham.tenSP} />
                <div class="card-body">
                    <h5 class="card-title">{sanpham.tenSP}</h5>
                    <div className="row">
                        <div className="col-5">
                            <p class="card-text align-center">${sanpham.giaBan.toLocaleString()}</p>
                        </div>
                        <div className="col-7 text-center">
                            <button onClick={()=>{
                                this.props.themGioHang(sanpham)
                            }} class="btn btn-danger">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
