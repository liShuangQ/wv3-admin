import Axios from "./Axios";


// axios基础设置
const http = new Axios({
    baseURL: 'localhost:8080',
    timeout: 300000,
    throttle:false, // 自定义 是否开启节流
    spinning:true,  // 自定义 是否出现旋转蒙层
    headers: {
    },
});
export { http };
