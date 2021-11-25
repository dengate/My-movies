import React from 'react'

const SearchBar = (props) => {

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Arama</label>
                <input className="form-control" placeholder="Ara.."  onChange={(event) => props.searchFilms(event.target.value)} />
            </div>
        </form>
    )

}

export default SearchBar;