import React from "react";
import memeData from "../memeData.js"

export default function Meme() {

    // meme Object
    const memeObject = {
        topText: " ",
        bottomText: " ",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    }

    // Initial state and updated state for memeObject
    const [meme, setMeme] = React.useState(memeObject)

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function getMemeImage() {
        // access to array in data
        const memeArray = allMemeImages.data.memes
        // get a random number 
        const randomNumber = Math.floor(Math.random() * memeArray.length)

        // the url of random object from array
        const url = memeArray[randomNumber].url
        // same way -> destructing url from object
        // const {url} = memeArray[randomNumber]
        // console.log(url)

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
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
                <img className="section--image" alt="memeImage" src={meme.randomImage}/>
            </div>
        </section>
    )
}