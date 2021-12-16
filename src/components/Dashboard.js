import { createFollowedCoin, getFollowedCoins, deleteCoin } from "../api/coindb"
import { useState, useEffect, React } from "react"
import { Link } from 'react-router-dom'


function Dashboard(props) {
    const { user } = props
    let [usersSavedCoins, setUsersSavedCoins] = useState([])

    // This Function is to POST coins to the saved collection in the database
    const addCoin = (info) => {
        createFollowedCoin(info, user)
            .then(res => {
                getFollowedCoins(user)
                    .then(res => {
                        res = Object.values(res.data.coins)
                        console.log('res spam');
                        setUsersSavedCoins(res)
                    })
            })
    }


    // This Function is to DELETE coins from the saved collection in the database
    const removeCoin = (s) => {
        deleteCoin(s._id)
            .then(res => {
                getFollowedCoins(user)
                    .then(res => {
                        res = Object.values(res.data.coins)
                        console.log('res spam');
                        setUsersSavedCoins(res)
                    })

            })
    }
    // TRY OUT ON CLICK FUNCTION ON ADD TO FAVORITES TO SETSTATE OF FOLLOWEDCOINS TO UPDATED COINS
    let allCoins = props.coins.map((c, i) => {
        return (
            <li key={i}>
                <div className="coinsFromAPI">
                    <Link to={`${c.id}`}>{c.name}</Link>
                    {c.symbol}
                    ${Number(c.priceUsd).toFixed(2)}
                    <button onClick={() => addCoin(c)}>Favorite</button>
                </div>
            </li>
        )
    })


    let usersSavedCoinsNotMapped = usersSavedCoins.map((s, i) => {
        return (
            <li key={i}>
                <div>
                    <Link to={`${s.id}`}>{s.name}</Link>
                    <button onClick={() => removeCoin(s)}>Remove Coin</button>
                </div>
            </li>
        )

    })



    // This useEffect and Function is to GET all the saved Coins from the Database
    // useEffect(() => {
    //     let isMounted = true
    //     getFollowedCoins(user)
    //         .then((res) => {
    //             console.log('res spam')
    //             if (isMounted) {
    //                 res = Object.values(res.data.coins)
    //                 setUsersSavedCoins(res)
    //             }
    //         })
    //     return () => {
    //         isMounted = false
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [usersSavedCoinsNotMapped])
    useEffect(() => {
        getFollowedCoins(user)
            .then(res => {
                res = Object.values(res.data.coins)
                console.log('res spam');
                setUsersSavedCoins(res)
            })
    }, [])

    return (

        <>
            <div className="dashboard">
                <h2>This is your dashboard</h2>
                <h4>Followed Coins: </h4>
                <ul>
                    {usersSavedCoinsNotMapped}
                </ul>
                <h4>Cryptos</h4>
                <ul>
                    {allCoins}
                </ul>
            </div>
        </>
    )
}

export default Dashboard
