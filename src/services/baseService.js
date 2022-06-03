import axios from "axios"
import { ACCESSTOKEN, DOMAIN } from "../util/setting"

export class baseService {
    constructor(){

    }
    // PHƯƠNG THỨC GET
    get = (url) => {
        let promise = axios({
            url:`${DOMAIN}${url}`,
            method:'GET',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
            }
        });
        return promise;
    }
    // get2: ko cần xác thực đăng nhập
    get2 = (url) => {
        let promise = axios({
            url:`${DOMAIN}${url}`,
            method:'GET',
        });
        return promise;
    }
    // PHƯƠNG THỨC POST
    post = (url,data) => {
        let promise = axios({
            url:`${DOMAIN}${url}`,
            method:'POST',
            data:data,
            headers:{
                'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
            }
        }); 
        return promise;
    }
    // post2 : ko cần xác thực đăng nhập
    post2 = (url,data) => {
        let promise = axios({
            url:`${DOMAIN}${url}`,
            method:'POST',
            data:data,
            
        }); 
        return promise;
    }
    // PHƯƠNG THỨC PUT
    put = (url,data) => {
        let promise = axios({
            url:`${DOMAIN}${url}`,
            method:'PUT',
            data:data,
            headers:{
                'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
            }
        });
        return promise;
    }
    // put2: ko cần xác thực đăng nhập
    put2 = (url,data) => {
        let promise = axios({
            url:`${DOMAIN}${url}`,
            method:'PUT',
            data:data,
            
        });
        return promise;
    }
    // PHƯƠNG THỨC DELETE
    delete = (url) => {
        let promise = axios({
            url:`${DOMAIN}${url}`,
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem(ACCESSTOKEN)}`
            }
        });
        return promise;
    }
}