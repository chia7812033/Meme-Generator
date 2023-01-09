import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
  const allMemeImages = memesData.data.memes

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  function getMemeImage() {
    const index = Math.floor(Math.random() * memesData.data.memes.length)
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: allMemeImages[index].url
      }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value.toUpperCase()
      }
    }
    )
  }

  // function handleSubmit(event) {
  //   console.log(meme.topText+meme.bottomText)
  //   event.preventDefualt()
  // }

  return (
    <div>
      <form className="meme">
        <input
          type="text"
          className="meme--input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}/>
        <input
          type="text"
          className="meme--input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}/>
        <button
          className="meme--button"
          onClick={getMemeImage}>Get a new meme image  🖼</button>
      </form>
      <div className="meme--box">
        <img src={meme.randomImage} alt="memeImage" className="meme--img" />
        <h2 className="meme--toptext">{meme.topText}</h2>
        <h2 className="meme--bottomtext">{meme.bottomText}</h2>
      </div>
    </div>
  )
}
