import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import QuizHeader from './QuizHeader';
import QuizAnswer from './QuizAnswer';
import { Grid, Paper } from '@material-ui/core';
import styled from 'styled-components';

const QuizContainer = styled(Paper)`
	&& {
		padding: 2em 2em 2em 2em;
		margin-top: 3em;
		background-color: #e0e0e0;
	}
`;

const Quiz = props => {
	const quizContext = useContext(QuizContext);
	const { question, number, answers } = quizContext.state;
	const dispatch = quizContext.dispatch;
	const [questions, setQuestions] = useState([
		{
			key: Math.random(),
			text: 'What is one plus one???',
			answers: ['1', '2', '3', '0'],
			correctAnswer: '2',
			number: 1
		},
		{
			key: Math.random(),
			text: 'What is 1 * 1?',
			answers: ['1', '2', '3', '0'],
			correctAnswer: '1',
			number: 2
		}
	]);

	useEffect(() => {
		dispatch({
			type: 'SET_CURRENT_QUESTION',
			question: questions[number - 1].text,
			correctAnswer: questions[number - 1].correctAnswer,
			answers: questions[number - 1].answers
		});
		dispatch({ type: 'SET_MAX_NUMBER', questionAmount: questions.length });
	}, []);

	return (
		<QuizContainer>
			<Grid container spacing={4} justify="center">
				<Grid item xs={12}>
					<QuizHeader></QuizHeader>
				</Grid>
				<Grid container item spacing={4} justify="center">
					{answers.map(answer => (
						<Grid item md={6} xs={12}>
							<QuizAnswer
								answer={answer}
								state={quizContext.state}
								dispatch={quizContext.dispatch}
							></QuizAnswer>
						</Grid>
					))}
				</Grid>
			</Grid>
		</QuizContainer>
	);
};

export default Quiz;
