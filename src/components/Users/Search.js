import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
	state = {
		text: ''
	};
	clearUsers = e => {
		e.preventDefault();
		this.props.clearUsers(e);
		this.props.userState = [];
	};

	onChange = e =>
		this.setState({
			[e.target.name]: e.target.value
		});
	onSubmit = e => {
		e.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert(' Please enter a search term', 'light');
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	render() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
		const { showClear, clearUsers } = this.props;
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text'
						onChange={this.onChange}
						value={this.state.text}
						placeholder='Search Users'
					/>
					<input type='submit' className='btn btn-dark btn-block' value='search' />
				</form>
				{showClear && (
					<button className='btn btn-light btn-block' onClick={clearUsers}>
						Clear
					</button>
				)}
			</div>
		);
	}
}

Search.propTypes = {
	searchUsers: PropTypes.func.isRequired,
	clearUsers: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};
export default Search;
