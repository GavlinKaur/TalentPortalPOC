import { CREATE_NEW_PROGRAM, FETCH_PROGRAMS, FETCH_PROGRAM_BY_ID } from '../constants/actionTypes';

const programReducer = (state = [], action) => {
    switch (action.type) {

        case CREATE_NEW_PROGRAM:
            return [
                ...state,
                Object.assign({}, action.employee)
            ];
        case FETCH_PROGRAMS:
            return action.payload;
        case FETCH_PROGRAM_BY_ID:
            return action.payload;
        default:
            return state;
    }
};

export default programReducer