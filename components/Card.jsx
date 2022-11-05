import React from "react";

const Card = ({ children }) => {
    return (
        <div className="bg-indigo-400 rounded-3xl p-10 pb-0 hover:scale-105 transition-transform duration-200 overflow-hidden cursor-pointer">
            {children}
        </div>
    );
};

export default Card;
