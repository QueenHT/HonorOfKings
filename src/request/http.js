// / 在http.js中引入axios

import axios from 'axios'; // 引入axios
import vueMain from '../main.js';
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = process.env.API_HOST;
}else if( process.env.NODE_ENV === 'prod') {
    axios.defaults.baseURL = process.env.API_HOST;
}else if( process.env.NODE_ENV === "testing"){
    
}

// 设置请求超时
axios.defaults.timeout = 10000;
// post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 设置请求拦截器
axios.defaults.withCredentials=true;
// 每次请求都带上cookie,这样每次取请求后端,就不会被认为是不同用户导致session丢失
// 响应拦截器
axios.interceptors.response.use(    
    response => {   
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {            
            return Promise.reject(response);        
        }    
    },    
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {            
        if (error.response.status) {            
            switch (error.response.status) {                
                // 404请求不存在
                case 404:
                    
                    break;
                // 其他错误，直接抛出错误提示
                default:
            }
            return Promise.reject(error.response);
        }
    }    
)
// 封装后axios方法  当需要指定请求类型时 不使用封装后的get和post方法 使用封装的axios方法
export{
    axios
}

// 封装get方法和post方法
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * et函数返回一个promise对象，当axios其请求成功时resolve服务器返回 值，请求失败时reject错误值。最后通过export抛出get函数。
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数]
 * post方法必须要使用对提交从参数对象进行序列化的操作，所以这里我们通过node的qs模块来序列化我们的参数
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url,params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}
