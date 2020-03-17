import React, { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { QuizContext } from '../../contexts/QuizContext';
import { TextCentered, TextRight } from '../StyledComponents/StyledTypography';
import styled from 'styled-components';

const QuestionText = styled(TextCentered)`
	font-weight: bold;
`;

const QuizHeader = props => {
	const quizContext = useContext(QuizContext);
	const { question, number, questionAmount, score } = quizContext.state;

	return (
		<Grid container spacing={4} justify="center">
			<Grid xs={12} item container>
				<Grid item xs={6}>
					<Typography variant="h6">
						Questions {number}/{questionAmount}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<TextRight variant="h6">Score: {score}</TextRight>
				</Grid>
			</Grid>
			<Grid xs={12} item>
				<QuestionText variant="h4">{question}</QuestionText>
			</Grid>
		</Grid>
	);
};

export default QuizHeader;
