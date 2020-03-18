import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';
import {
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from '@material-ui/core';
import { TextCentered } from './StyledComponents/StyledTypography';
import { PrimaryButton } from './StyledComponents/StyledButtons';
import styled from 'styled-components';

const CategoryFormControl = styled(FormControl)`
	&& {
		min-width: 150px;
		opacity: 1;
	}
`;

const StartMenu = props => {
	const quizContext = useContext(QuizContext);
	const { category } = quizContext.state;
	const dispatch = quizContext.dispatch;

	const onPlayHandler = () => {
		dispatch({ type: 'PLAY' });
	};

	const onSelectHandler = event => {
		dispatch({ type: 'SELECT_CATEGORY', category: event.target.value });
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} container justify="center">
				<TextCentered variant="h4">The Quiz</TextCentered>
			</Grid>
			<Grid item xs={12} container justify="center">
				<CategoryFormControl variant="filled" color="secondary">
					<InputLabel id="category-select-label">Category</InputLabel>
					<Select
						labelId="category-select-label"
						id="category-select"
						style={{ backgroundColor: '#fafafa' }}
						value={category}
						onChange={onSelectHandler}
					>
						<MenuItem value={9}>General Knowledge</MenuItem>
						<MenuItem value={18}>Computers</MenuItem>
						<MenuItem value={31}>Anime</MenuItem>
						<MenuItem value={21}>Sports</MenuItem>
						<MenuItem value={23}>History</MenuItem>
						<MenuItem value={24}>Politics</MenuItem>
					</Select>
				</CategoryFormControl>
			</Grid>
			<Grid item xs={12} container justify="center">
				<PrimaryButton
					onClick={onPlayHandler}
					variant="contained"
					size="large"
				>
					Play
				</PrimaryButton>
			</Grid>
		</Grid>
	);
};

export default StartMenu;
