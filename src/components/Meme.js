import React from "react"

export default function Meme() {
  return (
    <form className="meme">
      <input type="text" value="Shut up" className="meme--input"></input>
      <input type="text" value="and take my money" className="meme--input"></input>
      <button className="meme--button">Get a new meme image  🖼</button>
    </form>
  )
}
