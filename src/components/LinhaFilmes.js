import React from "react";
import "./LinhaFilmes.css";
import { useState } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

function LinhaFilmes(props) {
  const [scrollX, setScrollX] = useState(0);

  const moverEsquerda = () => {
    let x = scrollX + 150;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const moverDireita = () => {
    let x = scrollX - 150;
    let listW = 20 * 200;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="LinhasFilmes">
      <h2>{props.title}</h2>
      <div className="icons--left" onClick={moverEsquerda}>
        <NavigateBeforeIcon style={{ fontSize: 50 }}></NavigateBeforeIcon>
      </div>
      <div className="icons--right " onClick={moverDireita}>
        <NavigateNextIcon style={{ fontSize: 50 }}></NavigateNextIcon>
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: 20 * 250,
          }}
        >
          {props.items.results.map((item, key) => (
            <div className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinhaFilmes;
