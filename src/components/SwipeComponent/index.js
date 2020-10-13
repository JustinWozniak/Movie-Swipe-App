import React, { useState } from 'react';
import { useAsync } from 'react-async';
import TinderCard from 'react-tinder-card';

const mostPopularMovies =
	'https://api.themoviedb.org/3/discover/movie?api_key=' +
	process.env.REACT_APP_MOVIE_API_KEY +
	'&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1';

// Then we'll fetch user data from this API
const mostPopularTask = async () =>
	await fetch(mostPopularMovies).then((res) => (res.ok ? res : Promise.reject(res))).then((res) => res.json());


function Swipe() {
	const posterPath = 'https://image.tmdb.org/t/p/w500/';
	const [ lastDirection, setLastDirection ] = useState();

	const { data, error, isLoading } = useAsync({ promiseFn: mostPopularTask });
	if (isLoading) return 'Loading...';
	if (error) return `Something went wrong: ${error.message} Movies In Theaters`;
	if (data) {
      
		let movieImageUrls = [];
        let movieNumbers = [];
        let movieTitle=[]
		let trendingMoviesCount = data.results.length;
		for (let i = 0; i < trendingMoviesCount; i++) {
			movieImageUrls.push(data.results[i].poster_path);
            movieNumbers.push(data.results[i].id);
            movieTitle.push(data.results[i].title);
          
		}

		const swiped = (direction, nameToDelete) => {
			console.log('removing: ' + nameToDelete);
			setLastDirection(direction);
		};

		const outOfFrame = (name) => {
			console.log(name + ' left the screen!');
		};

		return (
			<div>
				<h1>New Movies</h1>
				<div className="cardContainer">
					{movieImageUrls.map((images, index) => (
						<TinderCard
							className="swipe"
							key={movieNumbers[index]}
							onSwipe={(dir) => swiped(dir, index)}
							onCardLeftScreen={() => outOfFrame(index)}
						>
							<img
								className="movieCovers"
								src={posterPath + images}
								alt="movie"
							
							/>
								<h3>{movieTitle[index]}</h3>
						
						</TinderCard>
					))}
				</div>
				<h2 className="infoText">You swiped {lastDirection}</h2>
			</div>
		);
	}
}

export default Swipe;
