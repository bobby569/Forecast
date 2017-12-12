import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	onInputChange(e) {
		this.setState({ term: e.target.value });
	}

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input
					placeholder="Enter your city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}

export default connect(null, { fetchWeather })(SearchBar);
