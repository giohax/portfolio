import React from "react";
import Image from "next/image";

const Card = ({
    src,
    alt,
    title,
    caption,
    redirect = "",
    color,
    colSpan,
    bg = "",
    children,
}) => {
    return (
        <div
            className={`${color} rounded-3xl p-10 pb-0 sm:hover:scale-105 sm:hover:shadow-lg transition-transform duration-200 overflow-hidden cursor-pointer flex flex-col justify-between ${colSpan} `}
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            onClick={() => {
                if (redirect) {
                    window.open(`${redirect}`, "_blank");
                }
                return;
            }}
        >
            {src && (
                <div className="flex flex-col sm:flex-row justify-center gap-10 ">
                    <div className="flex justify-between select-none ">
                        <div className=" ">
                            <h1 className="text-white text-xl pb-3">{title}</h1>
                            <p className="text-gray-300 mb-10 text-md">
                                {caption}
                            </p>
                        </div>
                    </div>
                    <Image
                        src={src}
                        alt={alt}
                        width={500}
                        height={500}
                        className="rounded-xl -mb-5"
                    />
                </div>
            )}

            {children}
        </div>
    );
};

export default Card;
