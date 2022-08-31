const api_key = "38c007f28d5b66f36b9c3cf8d8452a4b";
const api_base = "https://api.themoviedb.org/3";

const itemsFetch = async (endpoint) => {
  const req = await fetch(`${api_base}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await itemsFetch(
          `/discover/tv?with_networks=213&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await itemsFetch(
          `/trending/all/week?language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await itemsFetch(
          `/movie/top_rated?language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await itemsFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await itemsFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await itemsFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await itemsFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await itemsFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await itemsFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${api_key}`
          );
          break;
        case "tv":
          info = await itemsFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${api_key}`
          );
          break;    
        default:
          info = null;
          break;
      }
    }
    return info;
  },
};
