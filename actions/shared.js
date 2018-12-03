import { getInitialData } from '../api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './autheduser';

const autheduser = 'sarahedo';

export function handleInitialData() {
	return (dispatch) => {
		return getInitialData()
			.then(({users, questions}) => {
				dispatch(receiveUsers(users));
				dispatch(receiveQuestions(questions));
				dispatch(setAuthedUser(autheduser))
			})
	}
}