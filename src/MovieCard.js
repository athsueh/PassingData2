import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const { users, favUser, movieInfo } = this.props;

    return (
      <li key={movieInfo.id}>
        <h2>{movieInfo.name}</h2>
        <p>Liked By:</p>

        {!favUser ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            {favUser &&
              favUser.map(userId => {
                return (
                  <li key={userId}>
                    <p>{users[userId].name}</p>
                  </li>
                );
              })}
          </ul>
        )}
      </li>
    );
  }
}

export default MovieCard;
