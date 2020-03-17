import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { LightPaper } from '../StyledComponents/StyledContainers';

const QuestionSummary = props => {
	return (
		<LightPaper>
			<Grid container justify="flex-start">
				<Grid item xs={12}>
					<Typography variant="body1">
						Question: {props.question}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">
						You answered: {props.answer}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">
						Correct answer: {props.correctAnswer}
					</Typography>
				</Grid>
			</Grid>
		</LightPaper>
	);
};

export default QuestionSummary;
