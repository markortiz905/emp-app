
import { UPDATE_EMPLOYEES, UPDATE_EMPLOYEES_STARTED, UPDATE_EMPLOYEES_ENDED } from '../constants/action-types';

const initStates = {
	employees: [],
	loading: true,
	error: null
};

function rootReducer(state = initStates, action) {
	switch (action.type) {
		case UPDATE_EMPLOYEES_STARTED:
		  return {
			...state,
			loading: true,
			employees: null
		  };
		case UPDATE_EMPLOYEES:
		  return {
			...state,
			loading: false,
			error: null,
			employees: action.payload
		  };
		case UPDATE_EMPLOYEES_ENDED:
		  return {
			...state,
			loading: false,
			employees: [...state.employees]
		  };
		default:
		  return state;
	}
}

export default rootReducer;