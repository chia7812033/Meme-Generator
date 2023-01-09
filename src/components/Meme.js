import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
  const index = Math.floor(Math.random() * memesData.data.memes.length)
  const meme = memesData.data.memes[index]
  console.log(meme)
  return (
    <div>
      <div className="meme">
        <input type="text" className="meme--input"></input>
        <input type="text" className="meme--input"></input>
        <button className="meme--button">Get a new meme image  🖼</button>
      </div>
      <div className="meme--box">
        <img src={meme.url} alt={meme.name} className="meme--img"/>
      </div>
    </div>
  )
}
