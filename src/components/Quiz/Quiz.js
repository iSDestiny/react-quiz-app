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
	const { number, answers } = quizContext.state;
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
			answers: ['1', '2', '33', '10'],
			correctAnswer: '1',
			number: 2
		}
	]);

	useEffect(() => {
		fetch(
			'https://opentdb.com/api.php?amount=10&difficulty=easy&token=8dfe32d153267e03e208255382f0ed8faf312103a43d56fca1ef19f5e2a63a2f'
		)
			.then(response => response.json())
			.then(responseData => {
				const newQuestions = responseData.results.map(question => {
					const newQuestion = {
						key: Math.random(),
						text: question.question,
						answers: question.incorrect_answers,
						correctAnswer: question.correct_answer
					};
					const index = Math.floor(
						Math.random() * newQuestion.answers.length
					);
					newQuestion.answers.splice(
						index,
						0,
						newQuestion.correctAnswer
					);
					return newQuestion;
				});
				setQuestions(newQuestions);
				dispatch({
					type: 'SET_INITIAL_QUESTION',
					question: newQuestions[number - 1].text,
					questionAmount: newQuestions.length,
					correctAnswer: newQuestions[number - 1].correctAnswer,
					answers: newQuestions[number - 1].answers.map(answer => {
						return {
							text: answer,
							id: Math.random(),
							disabled: false
						};
					})
				});
			});
	}, []);

	return (
		<QuizContainer>
			<Grid container spacing={4} justify="center">
				<Grid item xs={12}>
					<QuizHeader></QuizHeader>
				</Grid>
				<Grid container item spacing={4} justify="center">
					{answers.map(answer => (
						<Grid item md={6} xs={12} key={answer.id}>
							<QuizAnswer
								answer={answer.text}
								questions={questions}
								id={answer.id}
								disabled={answer.disabled}
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
