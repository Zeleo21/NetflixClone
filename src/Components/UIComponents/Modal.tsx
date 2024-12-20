import { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 shadow-lg"
            onClick={onClose}
        >
            <div
                className="bg-default p-2 rounded-xl space-y-2 shadow-lg w-full a max-w-[750px] min-w-[550px] max-h-[500px] min-h-[200px] relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute p-2 m-2 top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    onClick={onClose}
                >
                </button>
                {children}
            </div>
        </div>
    );
};


export default Modal;