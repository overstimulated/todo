import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import UpdateTodo from './UpdateTodo';

describe("UpdateTodo component", () => {

    it("renders correctly", () => {

        render(<UpdateTodo todo={{description: 'test'}}/>);

        expect(screen.getByRole('update-todo')).toBeInTheDocument();
    });

    it("opens modal when button is clicked", () => {

        render(<UpdateTodo todo={{description: 'test'}}/>);

        fireEvent.click(screen.getByRole('update-todo'));

        expect(screen.getByText(/Update the descrption/)).toBeInTheDocument();

    });

    it("calls addTodo prop when yes button is clicked", async () => {
        const handleClick = jest.fn();

        render(<UpdateTodo updateTodo={handleClick} todo={{description: 'test'}}/>);

        await fireEvent.click(screen.getByRole('update-todo'));

        await fireEvent.click(screen.getByText(/Save/));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

})