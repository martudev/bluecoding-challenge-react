import { useEffect, useState } from "react";

export const useGiphy = (offset, limit, search) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&q=${search}&limit=${limit}&offset=${offset}`
      );
      const json = await response.json();
      const gifUrls = json.data.map((gif) => gif.images.original.url);
      setGifs(gifUrls);
    }, 2000);
  }, [offset, limit, search]);

  return { gifs };
};
