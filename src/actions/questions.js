import { saveQuestion, saveQuestionAnswer } from '../api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const UPDATE_QUESTION_ANSWER = 'UPDATE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

export function updateQuestionAnswer(authedUser, qid, answer) {
	return {
		type: UPDATE_QUESTION_ANSWER,
		authedUser,
		qid,
		answer
	}
}

export function handleAddQuestion(questionOneText, questionTwoText) {

	return (dispatch, getState) => {
		const { authedUser } = getState();

		return saveQuestion({
			questionOneText,
			questionTwoText,
			author: authedUser
		}).then((question) => dispatch(addQuestion(question)))
	}
}

export function handleUpdateQuestionAnswer(qid, answer) {

	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(updateQuestionAnswer(authedUser, qid, answer));

		return saveQuestionAnswer({
			authedUser,
			qid,
			answer
		}).catch((e) => dispatch(updateQuestionAnswer(authedUser, qid, answer)))
	}

}