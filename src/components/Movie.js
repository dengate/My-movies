import React from 'react';

const Movie = (props) => {
        
        const {imgUrl,name,overview,point} = props.movie;
        return (
            <div className="col-lg-4">
                <div className="card mb-4 shadow-sm">
                    <img src={imgUrl} className="card-img-top" alt="Card" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{overview}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="button" className="btn btn-md btn-outline-danger" onClick={(e) => props.deleteFilm(props.movie)}>Delete</button>
                            <h2><span className="badge bg-primary">{point}</span></h2>
                        </div>
                    </div>
                </div>
                
            </div>
        )
}

export default Movie; 
