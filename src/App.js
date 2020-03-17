import React, { useContext } from 'react';
import './App.css';
import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';
import { QuizContext } from './contexts/QuizContext';
import { Container } from '@material-ui/core';
import { QuizContainer } from './components/StyledComponents/StyledContainers';

function App() {
	const quizContext = useContext(QuizContext);

	return (
		<Container maxWidth="sm">
			<QuizContainer>
				{quizContext.state.complete ? <Results /> : <Quiz />}
			</QuizContainer>
		</Container>
	);
}

export default App;
