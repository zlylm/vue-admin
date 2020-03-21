import Ruquest from '@/request/index'

export const Test = (data)=> {
    return Ruquest({
        url:'/api/webUser/login',
        data
    })
}