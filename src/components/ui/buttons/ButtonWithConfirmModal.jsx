/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import ConfirmModal from "../modals/ConfirmModal";

export default function ButtonWithConfirmModal({  buttonText, buttonType, onConfirmHandler, text }) {
    const [isOpen, setOpen] = useState(false);

    const onClickHandler = (e) => {
        e.stopPropagation();
        setOpen(true);
    }

    return (
        <>
            <Button buttonType={buttonType} onClick={onClickHandler}>{buttonText}</Button>
            { isOpen && <ConfirmModal text={text} onCloseHandler={() => { setOpen(false) }} onConfirmHandler={onConfirmHandler}/> }
        </>
    );
}