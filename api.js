import {
	_getUsers,
	_getQuestions
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