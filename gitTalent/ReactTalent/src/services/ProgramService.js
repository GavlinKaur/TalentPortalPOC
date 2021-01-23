import API from "../utils/API";


class ProgramService {

    getPrograms() {
        return API.get(API.baseUrl);
    }

    createProgram(Program) {
        return API.post(API.baseUrl, Program);
    }

    getProgramById(ProgramId) {
        return API.get('/' + ProgramId);
    }

    updateProgram(Program, ProgramId) {
        return API.put('/' + ProgramId, Program);
    }

    deleteProgram(ProgramId) {

        let x = "/" + ProgramId;
        return API.delete(x);
    }
}

export default new ProgramService()