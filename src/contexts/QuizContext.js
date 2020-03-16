import React, { useReducer } from 'react';
import quizReducer, { initialState } from '../reducers/QuizReducer';

export const QuizContext = React.createContext();

const QuizContextProvider = props => {
	const [state, dispatch] = useReducer(quizReducer, initialState);

	return (
		<QuizContext.Provider value={{ state: state, dispatch: dispatch }}>
			{props.children}
		</QuizContext.Provider>
	);
};

export default QuizContextProvider;
