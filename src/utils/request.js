const baseUrl = "http://ball.lxruv.com/basketball" // 线上接口地址

import { getCookie } from './cookie'

const axios = require('axios')

export function getRootUrl() {
    return rootUrl
}

export function getBaseUrl() {
    return baseUrl
}
export function Axios({ url, data, method, header = "application/json" }) {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + url,
            data,
            method,
            headers: {
                "content-type": header,
                "Authorization": getCookie('token')
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}