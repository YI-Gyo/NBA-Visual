import React from 'react';
import NBA_logo from '../assets/image/nba-logoman-word-white.svg';

export class TopBar extends React.Component {
	render() {
		return (
			<header className="App-header">
				<img src={NBA_logo} className="App-logo" alt="logo" />
			</header>
		);
	}
}
