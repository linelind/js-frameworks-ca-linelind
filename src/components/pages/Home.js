import React, { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import PlayList from "../plays/PlayList";

export default function Home() {
  const [favourites, setFavourites] = useState([]);

  const addFavouritePlay = (fav) => {
    const newFavouriteList = [...favourites, fav];
    setFavourites(newFavouriteList);
    console.log("hei");
  };

  return (
    <div className='playContainer'>
      <Heading title='Home' />
      <PlayList handleFavouritesClick={addFavouritePlay} />
    </div>
  );
}
