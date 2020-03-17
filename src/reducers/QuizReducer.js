export const initialState = {
	question: 'INITIAL QUESTION',
	correctAnswer: '',
	answers: [],
	number: 1,
	questionAmount: 0,
	complete: false,
	score: 0,
	questions: []
};

const quizReducer = (state, action) => {
	switch (action.type) {
		case 'SET_INITIAL_QUESTION':
			return {
				...state,
				question: action.question,
				correctAnswer: action.correctAnswer,
				answers: action.answers,
				questionAmount: action.questionAmount,
				questions: action.questions
			};
		case 'DISABLE_ANSWERS':
			return {
				...state,
				answers: state.answers.map(answer => {
					return { ...answer, disabled: true };
				})
			};
		case 'SET_CURRENT_NUMBER':
			return {
				...state,
				number: state.number + action.number
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
				number: state.number + 1,
				correctAnswer: action.correctAnswer,
				answers: action.answers,
				questions: state.questions.map((question, index) => {
					return index === state.number - 1
						? { ...question, selectedAnswer: action.selectedAnswer }
						: question;
				})
			};
		case 'COMPLETE_QUIZ':
			return {
				...state,
				complete: true
			};
		case 'RESTART':
			return {
				...state,
				score: 0,
				complete: false,
				question: state.questions[0].text,
				answers: state.questions[0].answers,
				number: 1
			};
		default:
			throw new Error();
	}
};

export default quizReducer;
