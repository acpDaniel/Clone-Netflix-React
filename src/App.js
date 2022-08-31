import React, { useEffect, useState } from "react";
import "./App.css";
import requisicoes from "./requisicoes";
import LinhaFilmes from "./components/LinhaFilmes.js";
import FilmeDestaque from "./components/FilmeDestaque.js";
import Header from "./components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [destaque, setDestaque] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await requisicoes.getHomeList();
      setMovieList(list);
      console.log(list);

      let originals = list.filter((i) => i.slug === "originals");
      let numeroRandom = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let filmeEscolhido = originals[0].items.results[numeroRandom];
      let infoFilmeEscolhido = await requisicoes.getMovieInfo(
        filmeEscolhido.id,
        "tv"
      );
      setDestaque(infoFilmeEscolhido);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 20) {
        setBlackHeader(true);
      } else setBlackHeader(false);
    };
    window.addEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader}></Header>
      <FilmeDestaque item={destaque}></FilmeDestaque>
      <section className="lists">
        {movieList.map((item, key) => (
          <LinhaFilmes key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
