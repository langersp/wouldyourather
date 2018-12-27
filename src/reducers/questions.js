import { RECEIVE_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION_ANSWER } from '../actions/questions';

export default function users(state = {}, action) {

	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			}
		case ADD_QUESTION:
			const { question } = action;
			return {
				...state,
				[action.question.id]: question
			}
		case UPDATE_QUESTION_ANSWER:
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
					[action.answer]: {
						...state[action.qid][action.answer],
						votes: state[action.qid][action.answer].votes.includes([action.authedUser])
							? state[action.qid][action.answer].votes((uid) => uid !== action.authedUser)
							: state[action.qid][action.answer].votes.concat([action.authedUser])
					}
				}
			}
		default:
			return state
	}

}