
import thunk from 'redux-thunk';
import expect from 'expect';

import { FETCH_EMPLOYEES, CREATE_NEW_EMPLOYEE } from '../constants/actionTypes';
import employeeReducer from "./employeeReducer";



describe('Employees Data Testing', () => {


    it('should return FETCH_EMPLOYEES after successfully fetching employees list', () => {
        const startAction = {
            type: FETCH_EMPLOYEES,
            payload:{
                "id": 0,
                "first_name": "Patrick",
                "last_name": "Steuber",
                "emailId": "Walker.Bayer@yahoo.com",
                "gender": "Female",
                "age": 49,
                "address": "Suite 105",
                "country": "India"
            }
        };
        // it should not be empty
        expect(employeeReducer({}, startAction)).toEqual({
            "id": 0,
            "first_name": "Patrick",
            "last_name": "Steuber",
            "emailId": "Walker.Bayer@yahoo.com",
            "gender": "Female",
            "age": 49,
            "address": "Suite 105",
            "country": "India"
        });
    });



    it('should create CREATE_NEW_EMPLOYEE ', () => {
        const createAction = {
            type: CREATE_NEW_EMPLOYEE,
            employee : {
                "id": 100,
                "first_name": "Gavlin",
                "last_name": "Kaur",
                "emailId": "Walker.Bayer@yahoo.com",
                "gender": "Female",
                "age": 49,
                "address": "Suite 105",
                "country": "India"
            }
        };
        // it should be able to create new employee
        expect(employeeReducer([], createAction)).toEqual([{
            "id": 100,
            "first_name": "Gavlin",
            "last_name": "Kaur",
            "emailId": "Walker.Bayer@yahoo.com",
            "gender": "Female",
            "age": 49,
            "address": "Suite 105",
            "country": "India"
        }]);
    });



});