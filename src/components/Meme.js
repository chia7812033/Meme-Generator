import React from "react"

export default function Meme() {

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  function getMemeImage() {
    const index = Math.floor(Math.random() * allMemes.length)
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: allMemes[index].url
      }
    })
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    }
    )
  }

  return (
    <div>
      <div className="meme">
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
      </div>
      <div className="meme--box">
        <img src={meme.randomImage} alt="memeImage" className="meme--img" />
        <h2 className="meme--toptext">{meme.topText.toUpperCase()}</h2>
        <h2 className="meme--bottomtext">{meme.bottomText.toUpperCase()}</h2>
      </div>
    </div>
  )
}
