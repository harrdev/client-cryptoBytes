import React, { useEffect } from 'react'

function Dashboard(props) {
    const { user } = props

    // This useEffect and Function is to GET all the saved Coins from the Database
    useEffect(() => {
        getFollowedCoins(user)
            .then(res => {
                console.log('This is our Res for GetFOllowedCoins ', res)
                res = Object.values(res.data.coins)
                console.log('This is our Res for 2nd GetFOllowedCoins ', res)
                props.setSavedCoins(res)
            })
    }, [])

    // This Function is to POST coins to the saved collection in the database
    const addCoin = (info) => {
        createFollowedCoin(info, user)
            .then(res => {
                getFollowedCoins(user)
            .then(res => {
                console.log('This is our Res for GetFOllowedCoins ', res)
                res = Object.values(res.data.coins)
                console.log('This is our Res for 2nd GetFOllowedCoins ', res)
                props.setSavedCoins(res)
            })

            })
    }

    // This Function is to DELETE coins from the saved collection in the database
    const removeCoin = (s) => {
        deleteCoin(s._id)
            .then(res => {
                getFollowedCoins(user)
            .then(res => {
                console.log('This is our Res for GetFOllowedCoins ', res)
                res = Object.values(res.data.coins)
                console.log('This is our Res for 2nd GetFOllowedCoins ', res)
                props.setSavedCoins(res)
            })
            })
    }

    const allCoins = props.coins.map((c, i) => {
        return (
            <li key={i}>
                <div>
                    {c.name}
                    <br />
                    ${Number(c.priceUsd).toFixed(2)}
                    <br />
                    <button onClick={() => addCoin(c)}>Add to Favorites</button>
                </div>
            </li>
        )
    })


    const followedCoins = props.savedCoins.map((s, i) => {
        return (
            <li key={i}>
                <div>
                    <Link to={`${s.id}`}>{s.name}</Link>
                </div>
                <button onClick={() => removeCoin(s)}>Remove Coin</button>
            </li>
        )
    })

    return (
        <>
            <div className="dashboard">
                <h2>This is your dashboard</h2>
                <h4>Followed Coins: </h4>
                <ul>
                    {props.usersCoins}
                </ul>
                <h4>Cryptos</h4>
                <ul>
                    {props.allCoins}
                </ul>
            </div>
        </>
    )
}

export default Dashboard
