import API from "../utils/API";


class EmployeeService {

    getEmployees() {
        return API.get(API.baseUrl);
    }

    createEmployee(employee) {
        return API.post(API.baseUrl, employee);
    }

    getEmployeeById(employeeId) {
        return API.get('/' + employeeId);
    }

    updateEmployee(employee, employeeId) {
        return API.put('/' + employeeId, employee);
    }

    deleteEmployee(employeeId) {

        let x = "/" + employeeId;
        return API.delete(x);
    }
}

export default new EmployeeService()