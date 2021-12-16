import { useParams } from "react-router";
import { createCommentEntry, deleteComment } from '../api/commentdb'
import { useState } from 'react'

const EditCoin = (props) => {
    const { user, savedCoins } = props
    const coinName = useParams()
    let coinContent = props.coinData.filter(name => name.id.toLowerCase() === coinName.id.toLowerCase())
    coinContent = coinContent[0]

    const matchedCoin = savedCoins.filter(matchedCoin => matchedCoin.id === coinName.id)
    // This is the state to hold the form content
    const [formData, setFormData] = useState('')

    const handleChange = (e) => {
        console.log('This is the event returned from the form: ', e.target.value)
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        //This is where I can call the POST route in the commentdb api
        e.preventDefault()
        createCommentEntry(formData, user, coinContent, matchedCoin)
    }


    return (
        <div>
            <div className="editForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="textArea">Edit here {coinContent.symbol}?</label>
                    <br />
                    <input id="textArea" onChange={handleChange} />
                    <br />
                    <input type="submit" value="Post"></input>
                </form>
            </div>
        </div>
    )

}

export default Edit