import React from "react";
import Card from "./Card";
import Image from "next/image";

const Portfolio = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-5 p-5 pb-0 max-w-5xl">
                <Card src="" alt="" title="" caption="">
                    <h1 className="text-white text-lg">Google Search</h1>
                    <p className="text-gray-300 mb-10 text-sm">
                        NextJS application using Programmable Search Engine
                    </p>
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
