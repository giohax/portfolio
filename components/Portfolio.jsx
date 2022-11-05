import React from "react";
import Card from "./Card";

const Portfolio = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col sm:grid grid-cols-2 gap-5 p-5 pb-0 max-w-5xl">
                <Card
                    src="/googlesearch.png"
                    alt="Google Search"
                    title="Google Search"
                    caption="NextJS application using Programmable Search Engine"
                    redirect="https://google-clone-giohax.vercel.app/"
                    color="bg-indigo-400"
                />
                <Card
                    src="/imdb.png"
                    alt="IMDB"
                    title="IMDB"
                    caption="NextJS application using TMDB API"
                    redirect="https://imdb-clone-giohax.vercel.app/"
                    color="bg-neutral-700"
                />

                <Card
                    src="/searchbook.png"
                    alt="Searchbook"
                    title="Searchbook"
                    caption="ReactJS application with Redux"
                    redirect="https://searchbook-giohax.vercel.app/"
                    color="bg-yellow-800"
                />
            </div>
        </div>
    );
};

export default Portfolio;
