import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import QuizHeader from './QuizHeader';

const Quiz = props => {
	const quizContext = useContext(QuizContext);
	const { question, number, questionAmount, score } = quizContext.state;
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
			question: questions[number - 1].text
		});
		dispatch({ type: 'SET_MAX_NUMBER', questionAmount: questions.length });
	}, []);

	return (
		<div>
			<QuizHeader></QuizHeader>
		</div>
	);
};

export default Quiz;
