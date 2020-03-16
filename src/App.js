import React from 'react';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import { Container } from '@material-ui/core';

function App() {
	return (
		<Container maxWidth="sm">
			<Quiz />
		</Container>
	);
}

export default App;
