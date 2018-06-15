import React, { Component } from 'react';
import MovieCard from "./MovieCard";

class MovieList extends Component{
  render() {
	const {users, movies, favList} = this.props;

    const Movie = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        users={users}
        favUser={favList[id]}
        movieInfo={movies[id]}
      />
    ));

    return <ul>{Movie}</ul>;
  }
}

export default MovieList;
