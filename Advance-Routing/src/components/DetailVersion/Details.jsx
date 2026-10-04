import React, { useState } from "react";
import { useParams } from "react-router-dom";
import movieData from "./../../data/data.json";
import { useEffect } from "react";

function Details({}) {
  const { id } = useParams();

  const [data, setData] = useState(null);

  console.log(data);
  
  useEffect(() =>{
      const data = movieData.find((data) => data.id === parseInt(id));
      setData(data);
  }, [id]);

  return (
    <div>
      <h1>Details of Movie</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.year}</p>
          <p>{data.rating}</p>
          <p>{data.year}</p>
        </div>
        ) : (
          <p>Loading Data...</p>
        )}
    </div>
  );
}

export default Details;
