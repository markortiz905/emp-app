import {
  UPDATE_EMPLOYEES,
  UPDATE_EMPLOYEES_STARTED,
  UPDATE_EMPLOYEES_ENDED,
} from "../constants/action-types";

export function updateEmployees() {
  //return JSON_DATA.data;
  return function (dispatch, getState) {
    dispatch({ type: UPDATE_EMPLOYEES_STARTED });
    return fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((resp) => resp.data)
      .then((data) => dispatch({ type: UPDATE_EMPLOYEES, payload: data }))
      .then((obj) => dispatch({ type: UPDATE_EMPLOYEES_ENDED }));
  };
}
