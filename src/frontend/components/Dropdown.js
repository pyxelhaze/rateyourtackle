import { useState } from 'react';

const Dropdown = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Menu
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                    <ul className="list-none p-2">
                        {items.map((item, index) => (
                            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
