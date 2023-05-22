import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../loader";

function Mmorpg() {
  const [data, setdata] = useState([]);
  const [tablagames, setTablagames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://free-to-play-games-database.p.rapidapi.com/api/games",
          {
            params: {
              category: "MMORPG",
            },
            headers: {
              "X-RapidAPI-Key":
                "fa185f5357mshe05d22dcd2eeb1ep1a1612jsn865acac05910",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
          }
        );
        setdata(response.data);
        setTablagames(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let resultadoBusqueda = tablagames.filter(item => {
      if (
        item.title
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        item.genre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return item;
      }
      return null; 
    });
    setdata(resultadoBusqueda);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="gamesContainer">
          <div className="buscador">
            <input
              className="inputBuscar"
              value={busqueda}
              placeholder="search by name"
              onChange={handleChange}
            />
          </div>
          <h2>MMORPG</h2>
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

export { Mmorpg };
