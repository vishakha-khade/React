import movieData from './../../data/data.json';
import Movie from '../MovieCard/Movie';

function MovieDetails({id, title, category, year}) {

  return (
    <div>
      {movieData.map((data) =>(
        <Movie 
        key={data.id}
        id={data.id}
        title={data.title}
        category={data.category}
        year={data.year}
        rating={data.rating}
        language={data.language}
        />
      ))}

   </div>
  );
}

export default MovieDetails;
