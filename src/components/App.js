import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';


class App extends React.Component {


    state = {
        movies: [],

        searchQuery: ""
    }

    async componentDidMount(){
        const baseUrl = "http://localhost:3002/movies"
        const response = await (await fetch(baseUrl)).json();
        this.setState({movies: response})
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
            newMovieList[index].visible = newMovieList[index].name.toLowerCase().includes(text.toLowerCase()) ? true : false
        }
        this.setState(({
            movies: newMovieList
        }))
    }

    searchMovie = (text) => {
        this.setState(({
            searchQuery: text.toLowerCase()
        }))
    }

    render() {
        let filterMovies = this.state.movies.filter(
            (movie) => {
                //return movie.name.toLowerCase().includes(this.state.searchQuery) !== false;
                return movie.name.toLowerCase().indexOf(this.state.searchQuery) !== -1;
            })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar 
                        searchFilms={this.searchMovie}/>
                    </div>
                </div>
                <MovieList
                    movies={filterMovies}
                    deleteFilm={this.deleteFilm} />
            </div>
        );
    }
}

export default App;