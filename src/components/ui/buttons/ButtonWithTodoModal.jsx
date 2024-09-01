/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalTodo from "../modals/ModalTodo";
import Button from "./Button";

export default function ButtonWithTodoModal({ modalTitle, buttonText, buttonType, dispatch, type, data = null, className = '' }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Button className={className} buttonType={buttonType} onClick={() => { setOpen(true) }}>{buttonText}</Button>
            { isOpen && <ModalTodo modalTitle={modalTitle} onCloseHandler={() => { setOpen(false) }} dispatch={dispatch} type={type} data={data}/> }
        </>
    );
}