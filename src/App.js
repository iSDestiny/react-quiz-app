import React, { useContext } from 'react';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';
import StartMenu from './components/StartMenu';
import { QuizContext } from './contexts/QuizContext';
import { Container } from '@material-ui/core';
import { QuizContainer } from './components/StyledComponents/StyledContainers';

function App() {
	const quizContext = useContext(QuizContext);
	const { status } = quizContext.state;

	let display = <StartMenu />;
	if (status === 1) {
		display = <Results />;
	} else if (status === 2) {
		display = <Quiz />;
	}

	return (
		<Container maxWidth="sm">
			<QuizContainer>{display}</QuizContainer>
		</Container>
	);
}

export default App;
