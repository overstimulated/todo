import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import TodoList from './TodoList';

describe("TodoList component", () => {

    it("renders correctly", () => {

        render(<TodoList todoList={[{description: 'test1'}]}/>);

        const todoList = screen.getAllByRole('todo-list');
        const updateTodo = screen.getAllByRole('update-todo');
        const deleteTodo = screen.getAllByRole('delete-todo');

        expect(todoList.length).toBe(1);
        expect(updateTodo.length).toBe(1);
        expect(deleteTodo.length).toBe(1);

        expect(todoList[0]).toBeInTheDocument();
        expect(updateTodo[0]).toBeInTheDocument();
        expect(deleteTodo[0]).toBeInTheDocument();
    });

    it("marks a todo item with a strikethrough when it is completed", () => {

        render(<TodoList todoList={[{description: 'testonly', isCompleted: true}]}/>);

        expect(screen.getByText(/testonly/).tagName.toLowerCase()).toBe('s');
        
        expect(screen.getByRole('update-todo')).toBeDisabled();
    });

    it("displays Your list is empty when todolist is empty", () => {

        render(<TodoList todoList={[]}/>);

        expect(screen.getByText(/Your Todo list is empty/)).toBeInTheDocument();

        expect(screen.queryByRole('update-todo')).not.toBeInTheDocument();

        expect(screen.queryByRole('delete-todo')).not.toBeInTheDocument();
    });
})