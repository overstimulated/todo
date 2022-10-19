import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import DeleteTodo from './DeleteTodo';

describe("DeleteTodo component", () => {

    it("renders correctly", () => {

        render(<DeleteTodo todo={{description: 'test'}}/>);

        expect(screen.getByRole('delete-todo')).toBeInTheDocument();
    });

    it("opens modal when button is clicked", () => {

        render(<DeleteTodo todo={{description: 'test'}}/>);

        fireEvent.click(screen.getByRole('delete-todo'));

        expect(screen.getByText(/Delete the todo task?/)).toBeInTheDocument();

    });

    it("calls addTodo prop when yes button is clicked", async () => {
        const handleClick = jest.fn();

        render(<DeleteTodo deleteTodo={handleClick} todo={{description: 'test'}}/>);

        await fireEvent.click(screen.getByRole('delete-todo'));

        const modalHeader = screen.getByText(/Delete the todo task?/)

        await fireEvent.click(screen.getByText(/Yes/));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

})