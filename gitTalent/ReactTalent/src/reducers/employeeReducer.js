import { CREATE_NEW_EMPLOYEE, FETCH_EMPLOYEES } from '../constants/actionTypes';

const employeeReducer = (state = [], action) => {
    switch (action.type) {

        case CREATE_NEW_EMPLOYEE:
            return [
                ...state,
                Object.assign({}, action.employee)
            ];
        case FETCH_EMPLOYEES:
            return action.payload;
        default:
            return state;
    }
};

export default employeeReducer