import React from 'react';
import {render, fireEvent, wait, screen} from '@testing-library/react';
import NewEmployeeForm from "./NewEmployeeForm";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import employeeReducer from '../../reducers/employeeReducer';
import thunk from 'redux-thunk';

const store = createStore(
    employeeReducer,
    applyMiddleware(thunk)
);


const setup = () => {
    const utils = render(<Provider store={store}><NewEmployeeForm/></Provider>);
    return {
        ...utils
    }
}


describe("Test suite", () => {
    beforeEach(() => {
        jest.setTimeout(10000);
    });

    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            value: jest.fn(() => {
                return {
                    matches: true,
                    addListener: jest.fn(),
                    removeListener: jest.fn()
                };
            })
        });
    });

    it('submits correct values', async () => {
        let onSaveFn = jest.fn();
        const {container} = render(<Provider store={store}><NewEmployeeForm onSave={onSaveFn}/></Provider>);
        const firstName = container.querySelector('input[name="first_name"]')
        const lastName = container.querySelector('input[name="last_name"]')
        const email = container.querySelector('input[name="emailId"]')
        const age = container.querySelector('input[name="age"]')
        const address = container.querySelector('[name="address"]')
        const submit = container.querySelector('button[type="submit"]')


        await wait(() => {
            fireEvent.change(firstName, {
                target: {
                    value: "mockfirstName"
                }
            })
        })

        await wait(() => {
            fireEvent.change(lastName, {
                target: {
                    value: "mockLastName"
                }
            })
        })




        await wait(() => {
            fireEvent.change(email, {
                target: {
                    value: "mock@email.com"
                }
            })
        })

        await wait(() => {
            fireEvent.change(age, {
                target: {
                    value: 12
                }
            })
        })
        await wait(() => {
            fireEvent.change(address, {
                target: {
                    value: "Street 11"
                }
            })
        })

        await wait(() => {
            fireEvent.click(submit)
        })

        expect(onSaveFn).toHaveBeenCalledTimes(1);
        expect(onSaveFn).toHaveBeenCalledWith({
            "first_name": "mockfirstName",
            "last_name": "mockLastName",
            "emailId": "mock@email.com",
            "age": 12,
            "address": "Street 11"
        });

    })
});