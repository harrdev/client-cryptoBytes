import apiUrl from '../apiConfig'
import axios from 'axios'
import { useEffect } from 'react'

export const createFollowedCoin = (info, user) => {
    console.log("User: ", user)
    console.log("Info: ", info)
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        url: apiUrl + '/dashboard',
        data: {
            info: {
                id: info.id,
                symbol: info.symbol,
                marketCapUsd: info.marketCapUsd,
                maxSupply: info.maxSupply,
                rank: info.rank,
                name: info.name,
                priceUsd: info.priceUsd,
                supply: info.supply,
                changePercent24Hr: info.changePercent24Hr,
                volumeUsd24Hr: info.volumeUsd24Hr,
                vwap24Hr: info.vwap24Hr,
            },
        },
    })
}

export const getFollowedCoins = (res) => {
        return axios({
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${res.token}`
        },
        url: apiUrl + '/dashboard'
    })
        .then(res => {
            console.log('getFollowedCoins called')
            return res
        })
        .catch((error) => console.log(error))
    }


export const deleteCoin = (id, user) => {
    console.log('This is the id in coindb api Delete: ', id)
    return axios({
        url: `${apiUrl}/dashboard/${id}`,
        method: 'DELETE',
        // headers: {
        // 	Authorization: `Token token=${user.token}`,
        // },
    })
}