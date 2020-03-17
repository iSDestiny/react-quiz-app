import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const AnswerButton = styled(Button)`
	&& {
		background-color: ${props => {
			if (props.status === 'neutral') {
				return '#fafafa';
			} else if (props.status === 'wrong') {
				return '#f44336';
			} else {
				return '#66bb6a';
			}
		}};

		:disabled {
			opacity: 1;
		}
	}
`;

const QuizAnswer = props => {
	const [status, setStatus] = useState('neutral');
	const { correctAnswer, number, questionAmount } = props.state;
	const dispatch = props.dispatch;

	const clickHandler = answer => {
		if (answer === correctAnswer) {
			setStatus('right');
			dispatch({ type: 'INCREMENT_SCORE', score: 10 });
		} else {
			setStatus('wrong');
		}
		dispatch({ type: 'DISABLE_ANSWERS' });
		setTimeout(() => {
			if (number < questionAmount) {
				setStatus('neutral');
				dispatch({
					type: 'NEXT_QUESTION',
					answers: props.questions[number].answers.map(answer => {
						return {
							text: answer,
							id: Math.random(),
							disabled: false
						};
					}),
					correctAnswer: props.questions[number].correctAnswer,
					question: props.questions[number].text,
					selectedAnswer: correctAnswer
				});
			} else {
				dispatch({ type: 'COMPLETE_QUIZ' });
			}
		}, 500);
	};

	return (
		<AnswerButton
			status={status}
			variant="contained"
			fullWidth
			disabled={props.disabled}
			onClick={() => clickHandler(props.answer)}
		>
			{props.answer}
		</AnswerButton>
	);
};

export default QuizAnswer;
