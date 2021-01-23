import programReducer from './programReducer';

const appReducer = (state = [], action) => {
    return {
        programs: programReducer(state.programs, action),
    }
};

export default appReducer