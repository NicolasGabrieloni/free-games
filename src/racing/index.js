import "./racing.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../loader";

function Racing() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          {
            params: {
              category: "racing",
            },
            headers: {
              "X-RapidAPI-Key":
                "fa185f5357mshe05d22dcd2eeb1ep1a1612jsn865acac05910",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );
        setdata(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="gamesContainer">
          <h2>Racing</h2>
          <div className="cardsContainer">
            {data.map((item) => (
              <div className="card" key={item.id}>
                <div className="image-container">
                  <img className="img" src={item.thumbnail} alt={item.title} />
                </div>
                <h3 className="tittle">{item.title}</h3>
                <p className="genero">{item.genre}</p>
                <p className="plataforma">{item.platform}</p>
                <p className="link">
                  <a href={item.game_url}>Play Now</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export { Racing };
