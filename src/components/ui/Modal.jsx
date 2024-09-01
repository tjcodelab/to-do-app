import { createPortal } from "react-dom";

export default function Modal({ children }) {

    return createPortal(
        <div className="p-4 fixed top-0 left-0 h-full w-full bg-black bg-opacity-35 flex justify-center items-center ">
            <div className="w-full md:w-2/4 bg-white rounded-md max-h-full overflow-y-auto">
                { children }
            </div>
        </div>,
        document.getElementById('modal')
    );
}