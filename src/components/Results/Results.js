import React, { useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';
import { TextCentered } from '../StyledComponents/StyledTypography';
import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
// import QuestionSummary from './QuestionSummary';

const ActionButton = styled(Button)`
	&& {
		background-color: #fafafa;
		font-size: 1.1em;
	}
`;

const Results = props => {
	const quizContext = useContext(QuizContext);
	const { score } = quizContext.state;
	const dispatch = quizContext.dispatch;

	const onPlayAgainHandler = () => {
		dispatch({ type: 'RESTART' });
	};

	const onGoHomeHandler = () => {
		dispatch({ type: 'GO_HOME' });
	};

	return (
		<Grid container justify="center" spacing={3}>
			<Grid item sm={12}>
				<TextCentered variant="h6">You scored:</TextCentered>
				<TextCentered variant="h4">{score}</TextCentered>
			</Grid>
			{/* {questions.map(question => (
				<QuestionSummary
					key={question.key}
					answer={question.selectedAnswer}
					correctAnswer={question.correctAnswer}
					question={question.text}
				></QuestionSummary>
			))} */}
			<Grid container item spacing={2}>
				<Grid item sm={12} container justify="center">
					<ActionButton
						variant="contained"
						color="default"
						onClick={onPlayAgainHandler}
					>
						Play Again
					</ActionButton>
				</Grid>
				<Grid item sm={12} container justify="center">
					<ActionButton
						variant="contained"
						color="default"
						onClick={onGoHomeHandler}
					>
						Go Home
					</ActionButton>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Results;
