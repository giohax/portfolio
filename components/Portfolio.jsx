import React from "react";
import Card from "./Card";
import Image from "next/image";

const Portfolio = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col sm:grid grid-cols-6 gap-5 p-5 pb-0 max-w-5xl">
                <Card color="bg-stone-100" colSpan="col-span-4">
                    <div className="flex flex-col gap-44">
                        <div>
                            <h1 className="text-4xl font-bold mb-10 text-gray-700">
                                Hello, I&apos;m Giovanni, a React Frontend
                                Specialist
                            </h1>
                            <p className="text-gray-600">
                                I care a lot about using my skills for positive
                                impact, and enjoy creating blazingly fast and
                                fluid websites. Let me plan out and build your
                                next project.
                            </p>
                        </div>
                        <div></div>
                    </div>
                </Card>
                <Card
                    color="bg-stone-100"
                    colSpan="col-span-2"
                    bg={"fullphoto.jpeg"}
                ></Card>
                <Card
                    src="/googlesearch.png"
                    alt="Google Search"
                    title="Google Search"
                    caption="NextJS + TailwindCSS app using Programmable Search Engine"
                    redirect="https://google-clone-giohax.vercel.app/"
                    color="bg-indigo-400"
                    colSpan="col-span-3"
                />
                <Card
                    src="/imdb.png"
                    alt="IMDB"
                    title="IMDB"
                    caption="NextJS + TailwindCSS app using TMDB API"
                    redirect="https://imdb-clone-giohax.vercel.app/"
                    color="bg-neutral-700"
                    colSpan="col-span-3"
                />

                <Card
                    src="/searchbook.png"
                    alt="Searchbook"
                    title="Searchbook"
                    caption="ReactJS + TailwindCSS app with Redux"
                    redirect="https://searchbook-giohax.vercel.app/"
                    color="bg-yellow-800"
                    colSpan="col-span-3"
                />
            </div>
        </div>
    );
};

export default Portfolio;
