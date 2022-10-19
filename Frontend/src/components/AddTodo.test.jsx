import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import AddTodo from './AddTodo';

describe("AddTodo component", () => {

    it("renders correctly", () => {

        render(<AddTodo addTodo={{}}/>);

        expect(screen.getByPlaceholderText("Add your todo")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("calls addTodo prop when clicked", () => {

        const handleClick = jest.fn();

        render(<AddTodo addTodo={handleClick}/>);

        const input = screen.getByPlaceholderText("Add your todo");

        fireEvent.change(input, {target: {value: 'test123'}});

        fireEvent.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("input border color is set when value is empty", () => {

        render(<AddTodo/>);

        fireEvent.click(screen.getByRole("button"));

        expect(screen.getByPlaceholderText("Add your todo")).toHaveStyle('border-color: red');
    });
})