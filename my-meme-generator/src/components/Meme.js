import React from "react";
import memeData from "../memeData.js"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        // access to array in data
        const memeArray = memeData.data.memes
        // get a random number 
        const randomNumber = Math.floor(Math.random() * memeArray.length)

        // the url of random object from array
        const url = memeArray[randomNumber].url
        // same way -> destructing url from object
        // const {url} = memeArray[randomNumber]
        // console.log(url)

        setMemeImage(url)
    }

    return (
        <section>
            <div className="section--form">
                <div className="section--form--input">
                    <input className="section--input" placeholder="Top Text" type="text"/>
                    <input className="section--input" placeholder="Bottom Text" type="text"/>
                </div>
                <button onClick={getMemeImage} className="section--form--button">Get a new meme image 😛</button>
            </div>
            <div className="section--image--wrapper">
                <img className="section--image" alt="memeImage" src={memeImage}/>
            </div>
        </section>
    )
}