
import { UPDATE_EMPLOYEES, LOAD_EMPLOYEES , LOADING} from '../constants/action-types';

const initStates = {
	employees: [],
	loading: true
};

function rootReducer(state = initStates, action) {
	console.log(state.employees);
	if (action.type == UPDATE_EMPLOYEES) {
		state.employees = action.payload;
	} else if (action.type == LOADING) {
		state.loading = action.payload;
	}
	//means something happen bad
	return state;
}

export default rootReducer;