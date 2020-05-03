
import { UPDATE_EMPLOYEES, LOADING } from '../constants/action-types';

export function updateEmployees() {
	//return JSON_DATA.data;
	return function(dispatch) {
		dispatch({ type: LOADING, payload: true })
	    return fetch("http://dummy.restapiexample.com/api/v1/employees")
		      .then(res => res.json() )
		      .then(resp => resp.data )
		      .then(data => dispatch({ type: UPDATE_EMPLOYEES, payload: data }) )
		      .then(obj => dispatch({ type: LOADING, payload: false }));
	};
}
