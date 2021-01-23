import * as actionTypes from '../constants/actionTypes';
import ProgramService from "../services/ProgramService";


export const createProgram = (Program) => {
    return {
        type: actionTypes.CREATE_NEW_PROGRAM,
        Program
    }
};

// Sync Action
export const fetchProgramsSuccess = (Programs) => {
    return {
        type: actionTypes.FETCH_PROGRAMS,
        payload: Programs
    }
};

export const fetchProgramByIDSuccess = (Program) => {
    return {
        type: actionTypes.FETCH_PROGRAM_BY_ID,
        payload: Program
    }
};


//Async Action
export const fetchPrograms = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time

    return (dispatch) => {
        // Returns a promise
        ProgramService.getPrograms()
            .then(ProgramsResponse => {
                // Dispatch another action
                // to consume data
                dispatch(fetchProgramsSuccess(ProgramsResponse.data))
            })
            .catch(error => {
                console.log(error);
            })


    };
};

//Async Action
export const fetchProgramById = (Program) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time

    return (dispatch) => {
        // Returns a promise
        ProgramService.getProgramById(Program)
            .then(ProgramData => {
                // Dispatch another action
                // to consume data
                return ProgramService.getPrograms()
                    .then(ProgramsResponse => {
                        // Dispatch another action
                        // to consume data
                        dispatch(fetchProgramByIDSuccess(ProgramData.data))
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })


    };
};

export const deleteProgram = (Program) => {

    return (dispatch) => {
        // Returns a promise
        ProgramService.deleteProgram(Program)
            .then(ProgramsResponse => {
                // Dispatch another action
                // to consume data
                return ProgramService.getPrograms()
                    .then(ProgramsResponse => {
                        // Dispatch another action
                        // to consume data
                        dispatch(fetchProgramsSuccess(ProgramsResponse.data))
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })


    };
}

//Async Action
export const newProgram = (Program) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time


    return (dispatch) => {
        // Returns a promise
        return ProgramService.createProgram(Program)
            .then(ProgramsResponse => {
                // Dispatch another action
                // to consume data
                console.log(ProgramsResponse);
                return ProgramService.getPrograms()
                    .then(ProgramsResponse => {
                        // Dispatch another action
                        // to consume data
                        dispatch(fetchProgramsSuccess(ProgramsResponse.data))
                    })
                    .catch(error => {
                        console.log(error);
                    })

            })
            .catch(error => {
                console.log(error);
            })


    };
};