import React from "react";
import Image from "next/image";

const Card = ({ src, alt, title, caption, redirect, color, children }) => {
    return (
        <div
            className={`${color} rounded-3xl p-10 pb-0 hover:scale-105 transition-transform duration-200 overflow-hidden cursor-pointer flex flex-col justify-between`}
        >
            <div className="flex justify-between select-none ">
                <div className="flex flex-col basis-2/3 ">
                    <h1 className="text-white text-lg">{title}</h1>
                    <p className="text-gray-300 mb-10 text-sm">{caption}</p>
                </div>

                <div className="bg-white h-10 w-10 flex justify-center items-center rounded-full active:bg-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </div>
            </div>

            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="rounded-xl -mb-5"
            />
            {/* {children} */}
        </div>
    );
};

export default Card;
