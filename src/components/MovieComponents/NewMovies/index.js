import React, { useState } from 'react';

import { useAsync } from 'react-async';
import SingleMovie from '../SingleMovie';

const mostPopularMovies =
	'https://api.themoviedb.org/3/discover/movie?api_key=' +
	process.env.REACT_APP_MOVIE_API_KEY +
	'&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1';

// Then we'll fetch user data from this API
const mostPopularTask = async () =>
	await fetch(mostPopularMovies).then((res) => (res.ok ? res : Promise.reject(res))).then((res) => res.json());
	
function NewMovies(props) {
	let [ clicked, setClicked ] = useState(false);

	const posterPath = 'https://image.tmdb.org/t/p/w500/';
	const { data, error, isLoading } = useAsync({ promiseFn: mostPopularTask });
	if (isLoading) return 'Loading...';
	if (error) return `Something went wrong: ${error.message} Movies In Theaters`;
	if (data) {
		let movieImageUrls = [];
		let movieNumbers = [];
		let trendingMoviesCount = data.results.length;
		for (let i = 0; i < trendingMoviesCount; i++) {
			movieImageUrls.push(data.results[i].poster_path);
			movieNumbers.push(data.results[i].id);
			
		}


		// The rendered component
		return (
			<div>
				<h1>New Movies</h1>
				<h6>Click movie cover to toggle movie info</h6>
				{movieImageUrls.map((images, index) => {
					return (
						<div key={index}>
							<img
								className="movieCovers"
								src={posterPath + images}
								alt="movie"
								onClick={() => setClicked(!clicked)}
							/>
							{clicked === true ? (
								<SingleMovie value={movieNumbers[index]} /> 
							) : clicked === false ? (
								''
							) : (
								''
							)}
						</div>
					);
				})}
			</div>
		);
	}
}
export default NewMovies;
