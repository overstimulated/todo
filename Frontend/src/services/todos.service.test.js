import {getAllTodos, createTodo, deleteTodo, updateTodo} from './todos.service';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe("Todo Service", () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it("getAllTodos server responds unsuccessful should return error message", async () => {
        const serverError = "something went wrong!";
        fetch.mockImplementation(() => {
            throw new Error(serverError);
        });

        const response = await getAllTodos();

        expect(response.error.message).toEqual(serverError);
    });

    it("createTodo server responds with conflicted should return error message", async () => {

       const errorDuplicate = "Ooops! looks like it exists already!";

       const mockResponse = {
            ok: false,
            status: 409
       };

       fetch.mockResolvedValue(mockResponse);

       const response = await createTodo({}); 

       console.log(response);

       expect(response.error.message).toEqual(errorDuplicate)
    });
})