import '../../../index.css';
/* eslint-disable react/prop-types */
export default function Button({ buttonType = '', className = '', children, ...props }) {
    let color = 'btn-default';
    if(buttonType === 'primary') {
        color = 'btn-primary';
    } else if(buttonType === 'success') {
        color = 'btn-success';
    } else if(buttonType === 'warning') {
        color = 'btn-warning';
    } else if(buttonType === 'danger') {
        color = 'btn-danger';
    }

    let allClass = `py-2 px-4 text-white rounded-md ${color} ${className}`;
    return <button className={allClass} {...props}>{children}</button>
}