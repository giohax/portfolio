import React from "react";
import Card from "./Card";
import Image from "next/image";

const Portfolio = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-5 p-5 pb-0 max-w-5xl">
                <Card src="" alt="" title="" caption="">
                    <div className="flex justify-between select-none ">
                        <div className="flex flex-col basis-1/2 ">
                            <h1 className="text-white text-lg">
                                Google Search
                            </h1>
                            <p className="text-gray-300 mb-10 text-sm">
                                NextJS application using Programmable Search
                                Engine
                            </p>
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
                        src="/googlesearch.png"
                        alt="Google Mockup"
                        width={500}
                        height={500}
                        className="rounded-xl -mb-5"
                    />
                </Card>
                <Card>
                    <h1>IMDB</h1>
                    <p>NextJS application using the TMDB Api</p>
                </Card>
                <Card>
                    <h1>Searchbook</h1>
                    <p>Socla media for poker players</p>
                </Card>
            </div>
        </div>
    );
};

export default Portfolio;
