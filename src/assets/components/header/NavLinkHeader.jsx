import React from 'react';

export default ({ text, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) {
            onClick();
        }
    };

    return (
        <a href="#" onClick={handleClick} className="relative py-[1.69rem] group">
            <span className="group-hover:text-purple-950 transition-all duration-300">{text}</span>
            <span className="absolute left-0 bottom-[-2px] block h-1 w-full scale-x-0 group-hover:scale-x-100 group-hover:bg-teal-300 transition-all duration-300"></span>
        </a>
    );
};