import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../action/UserAction';
import { NavLink } from 'react-router-dom';
import "./styleRegister.css";


export default function Register(props) {

    const dispatch = useDispatch();
    // su dung thu vien Formik de lay du lieu nguoi dung
    const formik = useFormik({
        initialValues: { // khai bao cac thuoc tinh input
            username: '',
            password1: '',
            password2: '',
            email: ''
            
        },
        // su dung thu vien yup de xet validation
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Account is required'),
            password1: Yup.string().required('Password is required').min(6, 'Minimum length of password is 6').max(32, 'Maximum length of password is 32'),
            password2: Yup.string().required('Password is required').min(6, 'Minimum length of password is 6').max(32, 'Maximum length of password is 32'),
            email: Yup.string().email('Invalid email').required('Email is required')
        }),
        onSubmit: (values) => {
            
            // dua du lieu len API
            const action = dangKyAction(values);
            dispatch(action);
        }
    })



    return (
        <div className="container" style={{ paddingTop: '20px', width: '600px' }}>
            <form className="formLog" style={{ height: '700px'}} onSubmit={formik.handleSubmit}>
                <NavLink to="/">
                    <img className="imgLogo" src="./img/logo-login.png" alt="logo" />
                </NavLink>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <input name="username" className="form-control" placeholder="Enter username" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.username && formik.touched.username && <p className="text text-danger text-left">{formik.errors.username}</p>}
                        </div>
                        <div className="form-group">
                            <input name="email" className="form-control" placeholder="Enter email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.email && formik.touched.email && <p className="text text-danger text-left">{formik.errors.email}</p>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <input name="password1" className="form-control" placeholder="Enter password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.password1 && formik.touched.password1 && <p className="text text-danger text-left">{formik.errors.password1}</p>}
                        </div>
                        <div className="form-group">
                            <input name="password2" className="form-control" placeholder="Enter password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.password2 && formik.touched.password2 && <p className="text text-danger text-left">{formik.errors.password2}</p>}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btnLog mt-2">Register</button>
                </div>
                <div style={{ width: '250px', margin: '0 auto' }}>
                    <div className="social-Log mt-2">
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
