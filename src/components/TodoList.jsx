import { useReducer } from "react";
import { todoInitial, todoReducer } from "../reducers/todoReducer";
import TodoListItem from "./TodoListItem";
import ButtonWithTodoModal from "./ui/buttons/ButtonWithTodoModal";
import EmptyTodos from "./EmptyTodos";

export default function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, todoInitial);

    return (
        <>
            <section className="pr-4 pl-4">
                <div className="text-right mb-2">
                    <ButtonWithTodoModal buttonText="Add New To Do" buttonType="success" modalTitle="Add New To Do" dispatch={dispatch} type="add" />
                </div>

                { todos.length <= 0 && <EmptyTodos /> }
                { todos.length > 0 && (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <td className="w-1/2 pl-4 pr-4 pt-2 pb-2 font-semibold">Task</td>
                                <td className="pl-4 pr-4 pt-2 pb-2 font-semibold">End Date</td>
                                <td className="pl-4 pr-4 pt-2 pb-2 font-semibold">Status</td>
                                <td className="pl-4 pr-4 pt-2 pb-2 font-semibold">Priority</td>
                                <td className="pl-4 pr-4 pt-2 pb-2 font-semibold text-center">Action</td>
                            </tr>
                        </thead>
                        <tbody className="space-y-4 rounded-sm">
                            { todos.map(todo => <TodoListItem key={todo.id} data={todo} dispatch={dispatch}/>)}
                        </tbody>
                    </table>
                ) }
            </section>
        </>
    )
}