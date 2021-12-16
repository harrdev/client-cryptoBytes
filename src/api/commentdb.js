import apiUrl from '../apiConfig'
import axios from 'axios'

export const createCommentEntry = (content, user, coinContent, matchedCoin) => {
    console.log('This is the event type from the form: ', typeof e)
    console.log('This is the user from the form: ', user)
    console.log('This is the coin from the eachCoin component: ', coinContent)
    console.log('This our matched coin id: ', matchedCoin[0]._id)
    // const coinId = matchedCoin[0]._id
    return axios({
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${user.token}`,
            "Content-Type": "application/json"
        },
        url: `${apiUrl}/dashboard/comment/${coinContent.name}`,
        data: {
            content, 
            user: user, 
            coinContent: coinContent,
            matchedCoin: matchedCoin
        },
    })
}

export const deleteComment = (id, matchedCoin) => {
    console.log('This is the id in comment api Delete: ', id)
    return axios({
        url: `${apiUrl}/dashboard/comment/${id}`,
        method: 'DELETE',
        data: {
            matchedCoin
        }
        // headers: {
        // 	Authorization: `Token token=${user.token}`,
        // },
    })
}