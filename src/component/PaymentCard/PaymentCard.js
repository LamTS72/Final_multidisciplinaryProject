import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import {history} from '../../App';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./stylePaymentCard.css";


export default function PaymentCard(props) {

    const dispatch = useDispatch();
    // su dung thu vien Formik de lay du lieu nguoi dung
    const formik = useFormik({
        initialValues: { // khai bao cac thuoc tinh input
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            hoTen: ''
        },
        // su dung thu vien yup de xet validation
        validationSchema: Yup.object().shape({
            soThe: Yup.string().required('Invalid').matches(/^[0-9]+$/, 'Invalid'),
            ngayPhatHanh: Yup.string().required('Invalid'),
            hoTen: Yup.string().required('Invalid'),
        }),
        onSubmit: (values) => {
            
            // dua du lieu len API
            alert("Payment successful");
            history.goBack(); 
        }
    })



    return (
        <div className="container" style={{ paddingTop: '20px', width: '600px' }}>
            <form className="formPayment" style={{ height: '700px'}} onSubmit={formik.handleSubmit}>
                <NavLink to="/">
                    <img style={{width: '300px', height: '150px'}} className="imgLogo" src="/img/logo-login.png" alt="logo" />
                </NavLink>
                <div className="row">
                    <div className="col-12">
                        <p className="text-left font-weight-bold">BANK SELECTION</p>
                        <div className="form-group">
                            <select name="maNhom" className="maNhom form-control" onChange={formik.handleChange}>
                                {/* <option value="0">Chọn tên ngân hàng</option> */}
                                <option value="GP01">Vietcombank</option>
                                <option value="GP02">Agribank</option>
                                <option value="GP03">VPBank</option>
                                <option value="GP04">Sacombank</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <p className="text-left font-weight-bold">CARD NUMBER</p>
                            <input name="soThe" className="form-control" placeholder="9999888877776666" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.soThe && formik.touched.soThe && <p className="text text-left text-danger font-weight-bold">{formik.errors.soThe}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <p className="text-left font-weight-bold">CARDHOLDER NAME</p>
                            <input name="hoTen" className="form-control" placeholder="Nguyen Van A" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.hoTen && formik.touched.hoTen && <p className="text text-left text-danger font-weight-bold">{formik.errors.hoTen}</p>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <p className="text-left font-weight-bold">EXPIRATION DATE</p>
                            <input name="ngayPhatHanh" className="form-control" placeholder="MM/DD" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.errors.ngayPhatHanh && formik.touched.ngayPhatHanh && <p className="text text-left text-danger font-weight-bold">{formik.errors.ngayPhatHanh}</p>}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    {/* <NavLink onClick={()=>{
                        // alert("Bạn đã thanh toán thành công");
                    }} exact to="/" className="btn btn-danger mt-4">Accept payment</NavLink> */}
                    {/* <NavLink className="btn btn-danger mt-4" type="submit">

                    </NavLink> */}
                    <button type="submit" className="btn btn-danger">Accept payment</button>
                </div>
            </form>
        </div>
    )
}
