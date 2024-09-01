/* eslint-disable react/prop-types */
import Button from "../buttons/Button";
import Modal from "../Modal";

export default function ConfirmModal({text, onCloseHandler, onConfirmHandler}) {
    return (
        <Modal>
            <div className="card-body p-4 text-center">
                <p>{text}</p>
                <div className="flex justify-center mt-4">
                    <Button className="mr-2 text-black hover:text-white" onClick={onCloseHandler}>No</Button>
                    <Button buttonType="primary" onClick={onConfirmHandler}>Yes</Button>
                </div>
            </div>
        </Modal>
    );
}