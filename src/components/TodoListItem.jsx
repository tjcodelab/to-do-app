import Label from "./ui/Label";
import { formatDate } from "../utils/formatDate";
import { BiTrash, BiUpArrowAlt, BiDownArrowAlt, BiMinus, BiEdit } from "react-icons/bi";
import ButtonWithConfirmModal from "./ui/buttons/ButtonWithConfirmModal";
import ButtonWithTodoModal from "./ui/buttons/ButtonWithTodoModal";

/* eslint-disable react/prop-types */
const TodoListItem = ({ data, dispatch }) => {
    let text = '';

    if(data.status === 'todo') {
        text = 'To Do';
    } else if(data.status === 'in_progress') {
        text = 'In Progress';
    } else if(data.status === 'done') {
        text = 'Done';
    }

    const onConfirmHandler = () => {
        dispatch({ type: 'delete', payload: data.id })
    }

    return (
        <>
            <tr className="bg-white hover:bg-slate-200" >
                <td className="w-1/4 pl-4 pr-4 pt-2 pb-2 text-sm">{data.title}</td>
                <td className="pl-4 pr-4 pt-3 pb-3 text-sm">{formatDate(data.endDate)}</td>
                <td className="pl-4 pr-4 pt-3 pb-3 text-sm"><Label type={data.status}>{text}</Label></td>
                <td className="pl-4 pr-4 pt-3 pb-3 text-sm text-center">{ data.priority === 'high' ? <BiUpArrowAlt className="text-rose-500" /> : (data.priority === 'low' ? <BiDownArrowAlt className="text-blue-500" /> : <BiMinus className="text-amber-500" />) }</td>
                <td className="pl-4 pr-4 pt-3 pb-3 text-sm text-center">
                    <ButtonWithTodoModal className="mr-2" modalTitle="Edit To Do" buttonType="warning" buttonText={<BiEdit size="16"/>} dispatch={dispatch} type='update' data={data} />
                    <ButtonWithConfirmModal buttonText={<BiTrash size="16"/>} text="Are you sure want to delete this to do?" buttonType="danger" onConfirmHandler={onConfirmHandler}/>
                </td>
            </tr>
        </>
    );
};
export default TodoListItem;