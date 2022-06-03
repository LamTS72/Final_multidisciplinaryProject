import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom';
import _ from 'lodash';
import { history } from '../../App';
import { DANG_XUAT } from '../../action/types/FilmType';
import "./styleHeader.css";
import { USER_LOGIN } from '../../util/setting';
import { layThongTinAction } from '../../action/UserAction';

export default function Header(props){
    const dispatch = useDispatch();
    let { userLogin } = useSelector(state => state.UserReducer);
    
    
    const onSubmit = (e) => {
        e.preventDefault();
        let searchKey = document.getElementById("input-search").value;
        history.replace(`/timkiem/${searchKey}`);
    }

    return (
        <nav className="navbar navbar-expand-sm bg-white">
            <NavLink className="navbar-brand logo-top ml-2" to="/">
                <img height={50} width={50} src="/img/web-logo.png" alt="logo" />
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav navbar-text mx-auto mt-2 mt-lg-0 ">
                    <li className="nav-item mx-2 active">
                        <NavLink exact activeClassName="text-danger" className="nav-link font-weight-nomal" style={{ color: 'black' }} to="/home">Home</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link font-weight-nomal" href="#footer">Contact</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link font-weight-nomal" href="#media">News</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link font-weight-nomal" href="#mainApp">Application</a>
                    </li>


                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
                    <div className="searchMovie mr-2">
                        <input id="input-search" className="input-search form-control mr-sm-2" type="text" placeholder="Looking for..." />
                        <button type="submit" className="btn-search"><i className="fa fa-search"></i></button>
                    </div>
                    {/* kiểm tra đăng nhập, true => hiển thị tên tài khoản */}
                    {
                        _.isEmpty(userLogin) ? <div className="user-login">
                            <div className="btnLog mr-1"><NavLink activeClassName="text-danger" className="nav-link font-weight-nomal text-center" style={{ color: 'white' }} to="/login">Log in</NavLink></div>
                            <div className="btnLog"><NavLink className="nav-link font-weight-nomal text-center" style={{ color: 'white' }} to="/register">Register</NavLink></div>
                        </div> : <div className="dropdown btn-user">
                            <button className="btn btn-warning font-weight-bold text-white" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {userLogin.username ? userLogin.username : "Hello!"}
                            </button>
                            {/* các chức năng của người dùng */}
                            <div className="dropdown-menu">
                                {/* thực hiện chức năng đăng xuất */}
                                <button type="button" className="dropdown-item btn-user-event" onClick={()=>{
                                    localStorage.clear();
                                    dispatch({
                                        type:DANG_XUAT
                                    })
                                    // history.replace('/login');
                                    // window.location.reload();
                                }} >Log out</button>
                                <button type="button" className="dropdown-item btn-user-event" onClick={()=>{
                                    dispatch(layThongTinAction());
                                    history.replace(`/u`);
                                }} >My tickets</button>
                            </div>
                        </div>
                    }
                </form>
            </div>
        </nav>
    )
}

