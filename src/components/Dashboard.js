import { createFollowedCoin, getFollowedCoins, deleteCoin } from "../api/coindb"
import { useEffect, React } from "react"
import { Link } from 'react-router-dom'

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
                <div id="allCoins">
                    {c.name}, {c.symbol} USD ${Number(c.priceUsd).toFixed(2)}
                    <br />
                    <button id="button" onClick={() => addCoin(c)}>Add to Favorites</button>
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
                <button id="button" onClick={() => removeCoin(s)}>Remove Coin</button>
            </li>
        )
    })

    return (
        <>
            <div className="row">
                <div id="dashHeader"><h1><b><u>{user.fullName}'s Dashboard</u></b></h1></div>
                <div className="column">
                    <h4><b><u>CRYPTOS:</u></b></h4>
                    <ul>
                        <div className="allCoins">
                            {allCoins}
                        </div>
                        
                    </ul>
                </div>
                <div className="column">
                <h4><b><u>Followed Coins:</u></b></h4>
                    <ul>
                        <div className="allCoins">
                            {followedCoins}
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dashboard
