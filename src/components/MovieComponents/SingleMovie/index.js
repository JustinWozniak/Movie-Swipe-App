import React, { Component } from 'react';
import axios from 'axios';

let movieKey = 6666;

class SingleMovie extends Component {
	state = {
		number: [ 0 ],
		movieNumber: [],
		original_title: [],
		poster_path: [],
		tagline: [],
		overview: [],
		status: [],
		release_date: [],
		revenue: [],
		runtime: [],
		budget: [],

		//actors in the movie
		cast: [],
		actorsObject: [],
		actorsCount: []
	};

	componentDidMount() {
		movieKey = this.props.value;
		const API_URL =
			'https://api.themoviedb.org/3/movie/' +
			movieKey +
			'?api_key=' +
			process.env.REACT_APP_MOVIE_API_KEY +
			'&language=en-US&append_to_response=credits';
		const url = `${API_URL}`;
		axios.get(url).then((response) => response.data).then((data) => {
			this.setState({
				users: data,
				original_title: data.original_title,
				tagline: data.tagline,
				overview: data.overview,
			

			
			});

			let movieObject = Object.values(this.state.users);
			this.setState({ info: movieObject });
			this.setState({ movieNumber: this.props.value });
			movieKey = this.props.value;
		});
	}

	render() {
		movieKey = this.state.movieNumber;

		return (
			<div >
				{this.state.number.map(() => (
					<div key={this.state.movieNumber} >
						<h2 className="headerOne">{this.state.original_title}</h2>
						<h2 className="overViewText">{this.state.overview}</h2>
						<div className="factsDiv" />
					</div>
				))}
			</div>
		);
	}
}
export default SingleMovie;
