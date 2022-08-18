import React, { useEffect, useState } from 'react';
import Item from './Item.jsx';

const Grid = ({ category }) => {
  const API_KEY = "Th66GULoxS3flsXrHkGOQXrH8Unc4EF9"
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category);
  }, []);

  const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    setImages(gifs);
  };

  return (
    <>
      <h3>Grid: {category}</h3>
      <div className='card-grid'>
        {
          images.map((image) => 
            <Item key={image.id} {...image} />
          )
        }
      </div>
    </>
  );
};

export default Grid;