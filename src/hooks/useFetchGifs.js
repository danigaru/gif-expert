import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifsToCategory();
  }, [category]);

  const getGifsToCategory = async () => {
    const gifs = await getGifs(category);

      setState({
        data: gifs,
        loading: false,
      });
  };

  return state;
};
