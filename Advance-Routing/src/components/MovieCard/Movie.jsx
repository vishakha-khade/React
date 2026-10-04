import React from 'react'
import './Movie.css';
import { Link } from "react-router-dom"

const Movie = ({ id, title, category, year, rating, language}) => {
  return (
    <Link to={`/details/${id}`}>
    <div className="movie-card">
      <p>{id}</p>
      <h2>{title}</h2>
      <h3>{category}</h3>
      <h4>{language}</h4>
      <p>{year}</p>
      <p>{rating}</p>

    </div>
    </Link>
  );
}

export default Movie
