import React, { useEffect, useState } from "react";
import Input from "./Input";
import classes from "./Meme.module.css";

const Meme = function () {
  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    const getmemeData = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const { data } = await res.json();
        setAllMeme(data.memes);
      } catch (err) {
        console.log(err);
      }
    };
    getmemeData();
  }, []);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const handleChange = function (e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }
  return (
    <main className={classes.container}>
      <div className={classes.form}>
        <Input
          type="text"
          placeholder="Top text"
          className={classes["form-input"]}
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <Input
          type="text"
          placeholder="Bottom text"
          className={classes["form-input"]}
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />

        <button className={classes["form-button"]} onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className={classes.meme}>
        <img
          src={meme.randomImage}
          alt="meme-template"
          className={classes["meme--image"]}
        />
        <h2 className={`${classes["meme--text"]} ${classes.top}`}>
          {meme.topText}
        </h2>
        <h2 className={`${classes["meme--text"]} ${classes.bottom}`}>
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};

export default Meme;
