import React, { useContext, useState } from 'react';
import QuizContext from '../../contexts/QuizContext';
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
	}
`;

const QuizAnswer = props => {
	const [status, setStatus] = useState('neutral');
	const { correctAnswer } = props.state;
	const dispatch = props.dispatch;

	const clickHandler = answer => {
		console.log(correctAnswer);
		console.log(props.state);
		console.log(props.dispatch);
		if (answer === correctAnswer) {
			setStatus('right');
			dispatch({ type: 'INCREMENT_SCORE', score: 1 });
		} else {
			setStatus('wrong');
		}
	};

	return (
		<AnswerButton
			status={status}
			variant="contained"
			fullWidth
			onClick={() => clickHandler(props.answer)}
		>
			{props.answer}
		</AnswerButton>
	);
};

export default QuizAnswer;
