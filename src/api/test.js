import Axios from '@/request/index'

export const Test = (data)=> {
    return Axios.request({
        url:'/api/webUser/login',
        data
    })
}