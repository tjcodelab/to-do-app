/* eslint-disable react/prop-types */
export default function Label({ type, className, children }) {
    let color = 'label-default';
    if(type === 'todo') {
        color = 'label-todo';
    } else if(type === 'in_progress') {
        color = 'label-inprogress';
    } else if(type === 'done') {
        color = 'label-done';
    }

    const allClass = `px-2 py-1 rounded-md m-0 text-sm ${color} ${className}`;
    return <span className={allClass}>{children}</span>
}