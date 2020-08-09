import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DEFAULT_PLACEHOLDER_IMG =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const [hovered, setHovered] = useState(false);

  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMG : movie.Poster;

  return (
    <MovieWarp
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MovieTitle isHovered={hovered}>
        {movie.Title.length > 25
          ? `${movie.Title.slice(0, 25)}...`
          : movie.Title}
      </MovieTitle>
      <Link to={`/info/${movie.imdbID}`}>
        <PosterImg
          onClick={() => console.log(`clicked: ${movie.imdbID}`)}
          width='200'
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </Link>
      <p>({movie.Year})</p>
    </MovieWarp>
  );
};

const MovieWarp = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const MovieTitle = styled.h2`
  max-width: 200px;
  color: ${(props) => (props.isHovered ? "black" : "rgba(44, 62, 80,0.6)")};
  font-size: 15px;
  transition: all 0.3s linear;
`;

const PosterImg = styled.img`
  box-shadow: 3px 3px 3px gray;
  transition: box-shadow 0.2s linear;
  height: 300px;
  &:hover {
    box-shadow: 6px 6px 3px gray;
  }
`;

export default Movie;
