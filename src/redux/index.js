import store from "../redux/store/index";
import { updateEmployees } from "../redux/actions/index";

window.store = store;
window.updateEmployees = updateEmployees;