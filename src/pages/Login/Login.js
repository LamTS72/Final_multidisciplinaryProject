
import React from 'react';
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux';
import { dangNhapAction } from '../../action/UserAction';
import { history } from '../../App';
import { NavLink } from 'react-router-dom';
import "./styleLogin.css";




export default function Login(props) {

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit:(values) => {
            // gui thong tin dang nhap ve backend
            dispatch(dangNhapAction(values));
        }
    })

    return (
        <div className="container" style={{paddingTop:'100px',width:'400px'}}>
            <form className="formLog" onSubmit={formik.handleSubmit} >
                <NavLink to="/">
                    <img className="imgLogo" src="./img/logo-login.png" alt="logo" />
                </NavLink>
                
                <div className="form-group">
                    <input className="form-control" name="username" placeholder="Username" onChange={formik.handleChange} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={formik.handleChange} />
                </div>
                <div className="form-group mt-4">
                    <button className="btnLog mr-2">Log in</button>
                    <button type="button" className="btnLog mr-2" onClick={()=>{
                        history.replace('/register');
                    }}>Register</button>
                </div>
                <div style={{ width:'240px', margin: '0 auto' }}>
                    <div className="social-Log mt-4">
                        <a href="https://fb.com/">
                            <img className="img-social-log" src="./img/login-facebook.png" alt="login" />
                        </a>
                    </div>
                    <div className="social-Log my-2">
                        <a href="https://zalo-chat-static.zadn.vn/">
                            <img className="img-social-log" src="./img/login-zalo.png" alt="login" />
                        </a>
                    </div>
                    <div className="social-Log">
                        <a href="https://accounts.google.com">
                            <img className="img-social-log" src="./img/login-google.png" alt="login" />
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}
