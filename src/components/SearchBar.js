import React from 'react'

const SearchBar = (props) => {

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Search</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => props.searchFilms(event.target.value)} />
            </div>
        </form>
    )

}

export default SearchBar;