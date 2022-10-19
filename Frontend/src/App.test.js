import { screen, render, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import { v4 as uuidv4 } from 'uuid';

import App from './App';

fetchMock.enableMocks()

describe("App component", () => {

    beforeEach(() => {
        fetchMock.mockImplementation(mockTodoFetch);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("renders correctly with a todo", async () => {

        render(<App />)

        expect(await screen.findByRole('update-todo')).toBeInTheDocument();
    });
})


const mockTodoFetch = async () =>{

    const todoList = [{
        id: uuidv4(),
        description: 'test1',
        isCompleted: false
    }];

    return {
        ok: true,
        status: 200,
        json: async () => todoList,
    };
}