export const initialState = {
	question: 'INITIAL QUESTION',
	correctAnswer: '',
	answers: [],
	number: 1,
	questionAmount: 0,
	complete: false,
	score: 0
};

const quizReducer = (state, action) => {
	switch (action.type) {
		case 'SET_CURRENT_QUESTION':
			return {
				...state,
				question: action.question,
				correctAnswer: action.correctAnswer,
				answers: action.answers
			};
		case 'SET_CURRENT_NUMBER':
			return {
				...state,
				number: action.number
			};
		case 'SET_MAX_NUMBER':
			return {
				...state,
				questionAmount: action.questionAmount
			};
		case 'INCREMENT_SCORE':
			return {
				...state,
				score: state.score + action.score
			};
		case 'NEXT_QUESTION':
			return {
				...state,
				question: action.question,
				number: state.number + 1
			};
		case 'COMPLETE_QUIZ':
			return {
				...state,
				complete: true
			};
		case 'RESTART':
			return {
				score: 0,
				complete: false,
				question: action.question,
				questionAmount: state.questionAmount,
				number: 1
			};
		default:
			throw new Error();
	}
};

export default quizReducer;
