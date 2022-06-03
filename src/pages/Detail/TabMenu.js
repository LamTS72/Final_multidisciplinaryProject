import { Tabs } from 'antd';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './styleDetail.css';

const { TabPane } = Tabs;

export default class TabMenu extends React.Component{

    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((htr, index) => {
            return <TabPane tab={<div>
                <div className="row align-items-center">
                    <div className="col-4">
                        <img src={htr.logo} width={50} height={50} />
                    </div>
                    <div className="col-8">
                        <h5 className="text-white">{htr.tenHeThongRap}</h5>
                    </div>
                </div>
            </div>} key={index}>
                {htr.cumRapChieu.map((cumRap, index) => {
                    return <div key={index}>
                        <div className="d-flex flex-row mt-2 ml-2">
                            <div>
                                <img style={{width: '50px', height: '50px'}} src={htr.logo} alt="movie" />
                            </div>
                            <div className="ml-4 text-white">
                                <p>{cumRap.tenCumRap}</p>
                                <p>{cumRap.lichChieuPhim[index]?.ngayChieuGioChieu?.slice(0,10)}</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row mt-2 ml-2">
                            <div style={{width:'50px',height:'50px'}}>
                                <img className="w-100" src='/img/img-2d.jpg' alt="movie"/>
                            </div>
                            <div className= "showtime-detail pb-3">
                                <div className="row ml-2">
                                {/* chi hien thi 6 phan tu  */}
                                    {cumRap.lichChieuPhim.slice(0,6).map((lichChieu,index)=>{
                                        return <div className="col-3" key={index}>
                                            <NavLink className="btn btn-time btn-warning mb-1" to ={`/checkout/${lichChieu.maLichChieu}`}>{lichChieu.ngayChieuGioChieu.slice(11,16)}
                                            </NavLink>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>  
                    </div>
                })}
            </TabPane>
        })
    }

    renderRap = () => {
        return <TabPane tab={<div>
            <div className="row align-items-center">
                <div className="col-4">
                    <img src="/img/bhd.png" width={50} height={50} />
                </div>
                <div className="col-8"> 
                    <h5 className="text-white">BHD Star</h5>
                </div>
            </div>
        </div>}>
        <div>
            <div className="d-flex flex-row mt-2 ml-2">
                <div>
                    <img src="https://picsum.photos/50/50" alt="movie" />
                </div>
                <div className="ml-4 text-white">
                    <p>BHD Star Cineplex 3/2</p>
                    <p>Show times</p>
                </div>
            </div>
            <div className="d-flex flex-row mt-2 ml-2">
                <div style={{width:'50px',height:'50px'}}>
                    <img className="w-100" src='/img/img-2d.jpg' alt="movie"/>
                </div>
                <div className= "showtime-detail pb-3">
                    <div className="row ml-2">
                    {/* chi hien thi 6 phan tu  */}
                        <div className="col-3">
                            <NavLink className="btn btn-time btn-warning mb-1" to ={`/checkout/abc`}>19:30
                            </NavLink>
                        </div>
                        <div className="col-3">
                            <NavLink className="btn btn-time btn-warning mb-1" to ={`/checkout/def`}>14:00
                            </NavLink>
                        </div>
                        <div className="col-3">
                            <NavLink className="btn btn-time btn-warning mb-1" to ={`/checkout/xyz`}>11:00
                            </NavLink>
                        </div>
                        <div className="col-3">
                            <NavLink className="btn btn-time btn-warning mb-1" to ={`/checkout/xyzz`}>15:00
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        </TabPane>
    }
    render(){
        return(
            <>
                <Tabs tabPosition={'left'}>
                    {this.renderHeThongRap()}
                    {/* {this.renderRap()} */}
                </Tabs>
            </>
        );
    }
}