import { connect } from "react-redux";
import { updateEmployees } from "../../redux/actions/index";
import EmployeesView from "./EmployeesView";

const mapStateToProps = (state) => ({
  employees: state.employees,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    loadEmployees: () => dispatch(updateEmployees()),
  };
};

const Employees = connect(mapStateToProps, mapDispatchToProps)(EmployeesView);

export default Employees;
