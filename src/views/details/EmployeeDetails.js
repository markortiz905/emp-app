import {connect} from 'react-redux';

import EmployeeDetailsView from './EmployeeDetailsView'


const mapStateToProps = state => ({
	employees: state.employees
})

const EmployeesDetails = connect(mapStateToProps)(EmployeeDetailsView);

export default EmployeesDetails;