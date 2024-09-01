/* eslint-disable react/prop-types */
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Modal from "../Modal";
import Divider from "../Divider";
import { BiX } from "react-icons/bi";
import Button from "../buttons/Button";

export default function ModalTodo({ modalTitle, onCloseHandler, dispatch, type, data = null }) {
    const [formData, setFormData] = useState({
        id: data ? data.id : '',
        title: data ? data.title : '',
        description: data ? data.description : '',
        endDate: data ? data.endDate : new Date(),
        status: data ? data.status : 'todo',
        priority: data ? data.priority : ''
    });

    const [errors, setErrors] = useState(null);

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setFormData(currentData => ({
            ...currentData,
            [name]: value
        }));
    }

    const onDateChangeHandler = (date) => {
        setFormData(currentData => ({
            ...currentData,
            endDate: date
        }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if(formData.title === '') {
            errors = {
                ...errors,
                title: 'Title is required'
            };
        }

        if(formData.description === '') {
            errors = {
                ...errors,
                description: 'Description is required'
            };
        }

        if(!formData.endDate) {
            errors = {
                ...errors,
                endDate: 'End date is required'
            };
        }

        if(formData.priority === '') {
            errors = {
                ...errors,
                priority: 'Priority is required'
            };
        }

        if(Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        dispatch({ type: type, payload: formData });
        onCloseHandler();
    }

    return (
        <Modal>
            <div className="card-title p-4 flex justify-between items-center">
                <h1 className="font-semibold">{modalTitle}</h1>
                <button onClick={onCloseHandler}><BiX size="24" /></button>
            </div>
            <Divider />
            <form onSubmit={onFormSubmit}>
                <div className="card-body p-4">
                    <div className="form-group mb-2">
                        <label htmlFor="title" className="inline-block mb-2">Title</label>
                        <input type="text" name="title" id="title" value={formData.title} onChange={onChangeHandler} placeholder="Enter to do title" className="w-full outline-transparent border border-gray-400 p-2 text-sm focus:border-blue-400 rounded-sm" />
                        { (errors != null && errors.title !== '') && <small className="text-rose-500">{errors.title}</small>}
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="description" className="inline-block mb-2">Description</label>
                        <textarea name="description" id="description" onChange={onChangeHandler} placeholder="Enter to do description" className="w-full outline-transparent border border-gray-400 p-2 text-sm focus:border-blue-400 rounded-sm" rows="5" value={formData.description}></textarea>
                        { (errors != null && errors.description !== '') && <small className="text-rose-500">{errors.description}</small>}
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="endDate" className="inline-block mb-2">End Date</label>
                        <DatePicker wrapperClassName="w-full" selected={formData.endDate} onChange={onDateChangeHandler} className="w-full outline-transparent border border-gray-400 p-2 text-sm focus:border-blue-400 rounded-sm"/>
                        { (errors != null && errors.endDate !== '') && <small className="text-rose-500">{errors.endDate}</small>}
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="status" className="inline-block mb-2">Status</label>
                        <select name="status" id="status" value={formData.status} onChange={onChangeHandler} className="w-full outline-transparent border border-gray-400 p-2 text-sm focus:border-blue-400 rounded-sm">
                            <option value="todo">To Do</option>
                            <option value="in_progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="priority" className="inline-block mb-2">Priority</label>
                        <select name="priority" id="priority" value={formData.priority} onChange={onChangeHandler} className="w-full outline-transparent border border-gray-400 p-2 text-sm focus:border-blue-400 rounded-sm">
                            <option value="">Select Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        { (errors != null && errors.priority !== '') && <small className="text-rose-500">{errors.priority}</small>}
                    </div>
                </div>
                <Divider />
                <div className="card-footer p-4 text-right">
                    <Button className="mr-2 text-black hover:text-white" onClick={onCloseHandler}>Cancel</Button>
                    <Button type="submit" buttonType="primary">Save</Button>
                </div>
            </form>
        </Modal>
    )
}