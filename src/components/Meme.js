import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
  const memes = memesData.data.memes
  let index = Math.floor(Math.random() * memesData.data.memes.length)
  const [memeImage, setMemeImage] = React.useState(memes[index].url)

  function getMemeImage() {
    index = Math.floor(Math.random() * memesData.data.memes.length)
    setMemeImage(memes[index].url)
  }
  
  return (
    <div>
      <div className="meme">
        <input type="text" className="meme--input"></input>
        <input type="text" className="meme--input"></input>
        <button className="meme--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
      </div>
      <div className="meme--box">
        <img src={memeImage} alt="memeImage" className="meme--img"/>
      </div>
    </div>
  )
}
