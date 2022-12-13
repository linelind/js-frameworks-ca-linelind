import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../../constants/api";

function PlayList(props) {
  const FavouriteComponent = props.favouriteComponent;

  const [plays, setPlays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = API + "wp/v2/posts";

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(URL);

        if (response.ok) {
          const json = await response.json();
          setPlays(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError("An error occured");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <ul className='playItem'>
      {plays.map((play, index) => {
        return (
          <li key={play.id}>
            <Link to={`/detail/${play.id}`}>
              {play.id} : {play.title.rendered}
            </Link>
            <button id='favButton' className='cta' onClick={() => props.handleFavouritesClick(play)}>
              Favourite
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default PlayList;
