import React, { Component } from 'react';

export default class CurrencyError extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		return this.state.hasError ? (
			<h2>Could not display this currency.</h2>
		) : (
			this.props.children
		);
	}
}
