import React from "react";
import "./FilmeDestaque.css";

class FilmeDestaque extends React.Component {
  render() {
    let data = new Date(this.props.item.first_air_date);
    let genres = [];
    for (let i in this.props.item.genres) {
      genres.push(this.props.item.genres[i].name);
    }
    return (
      <section
        className="destaque"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.item.backdrop_path})`,
        }}
      >
        <div className="destaque--Vertical">
          <div className="destaque--Horizontal">
            <div className="destaque--Nome">
              {this.props.item.original_name}
            </div>
            <div className="destaque--infos">
              <div className="destaque--pontos">
                {this.props.item.vote_average} pontos
              </div>
              <div className="destaque--ano">{data.getFullYear()}</div>
              <div className="destaque--temporadas">
                {this.props.item.number_of_seasons} temporada
                {this.props.item.number_of_seasons !== 1 ? "s" : ""}
              </div>
              <div className="destaque--descricao">
                {this.props.item.overview}
              </div>
            </div>
            <div className="destaque--butoes">
              <a href="" className="butao--assistir">
                Assistir
              </a>
              <a href="" className="butao--minhaLista">
                Minha lista
              </a>
            </div>
            <div className="destaque--generos">
              <strong>Generos:</strong> {genres.join(", ")}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FilmeDestaque;
