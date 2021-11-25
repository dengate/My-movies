import React from 'react';
import Movie from './Movie';


const MovieList = (props) =>{


        return (
            <div className="row">
                {props.movies.map(movie => (movie.visible ? <Movie movie={movie} deleteFilm={props.deleteFilm} key={movie.id}/> : null))}
            </div>
        )
    
}

export default MovieList;
