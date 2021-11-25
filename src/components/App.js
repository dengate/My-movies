import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';


class App extends React.Component {


    state = {
        movies: [
            {
                "id": 1,
                "name": "Film1",
                "overview": "Örnektext1",
                "point": "9.8",
                "imgUrl": "https://picsum.photos/id/237/200/300",
                "visible": true
            },
            {
                "id": 2,
                "name": "Film2",
                "overview": "Örnektext2",
                "point": "9.7",
                "imgUrl": "https://picsum.photos/seed/picsum/200/300",
                "visible": true
            },
            {
                "id": 3,
                "name": "Film3",
                "overview": "Örnektext3",
                "point": "9.6",
                "imgUrl": "https://picsum.photos/200/300?grayscale",
                "visible": true
            }
        ]
    }

    deleteFilm = (movie) => {
        const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
        this.setState(state => ({
            movies: newMovieList
        }))

    }
    searchFilms = (text) =>{
        const newMovieList = this.state.movies
        for (let index = 0; index < newMovieList.length; index++) {
            newMovieList[index].visible = newMovieList[index].name.includes(text) ? true : false
        }
        this.setState(state => ({
            movies: newMovieList
        }))
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar 
                        searchFilms={this.searchFilms}/>
                    </div>
                </div>
                <MovieList
                    movies={this.state.movies}
                    deleteFilm={this.deleteFilm} />
            </div>
        );
    }
}

export default App;