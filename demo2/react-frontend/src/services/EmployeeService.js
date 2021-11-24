import axios from 'axios';

const EMPLOYEE_REST_API_URL = "http://localhost:8083/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_REST_API_URL);
    }
}

export default new EmployeeService()