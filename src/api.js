import {
	_getUsers,
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer
} from './_DATA.js';

// Get the initial data asynchronously. Use a Promise
export function getInitialData() {
	return Promise.all([
		_getUsers(),
		_getQuestions()
	]).then(([users, questions]) => ({
		users,
		questions
	}));
}

export function saveQuestion(question) {
	return _saveQuestion(question)
}

export function saveQuestionAnswer(question) {
	return _saveQuestionAnswer(question)
}