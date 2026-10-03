import movieData from './../../data/data.json';
import Movie from '../MovieCard/Movie';

function MovieDetails() {
  console.log(movieData);
  return (
    <>

      {movieData.map((data) =>(
        <Movie 
        key={data.id}
        title={data.title}
        category={data.category}
        year={data.year}
        rating={data.rating}
        language={data.language}
        />
      ))}

   </>
  );
}

export default MovieDetails;
