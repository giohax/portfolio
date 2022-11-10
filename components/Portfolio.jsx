import React from "react";
import Card from "./Card";
import Image from "next/image";

const Portfolio = () => {
    return (
        <div className="flex justify-center pb-10">
            <div className="flex flex-col sm:grid grid-cols-6 gap-5 p-5 pb-0 max-w-5xl">
                <Card color="bg-stone-100" colSpan="col-span-4">
                    <div className="flex flex-col gap-44">
                        <div>
                            <h1 className="text-4xl font-bold mb-10 text-gray-700">
                                Hello, I&apos;m Giovanni, a React Frontend
                                Specialist with more than 5 years of experience
                            </h1>
                            <p className="text-gray-600">
                                I&apos;m passionate about coding, design, and
                                trading. When I&apos;m not programming, I spend
                                my time trading the foreign exchange market and
                                researching into algorithmic trading.
                                <br />
                                <br />I care a lot about using my skills for
                                positive impact, and enjoy creating blazingly
                                fast, and elegant websites. Let me plan out and
                                build your next project.
                            </p>
                        </div>
                        <div></div>
                    </div>
                </Card>
                <Card
                    color="bg-stone-100"
                    colSpan="col-span-2"
                    bg={"fullphoto.jpeg"}
                >
                    <div className="flex flex-col gap-80">
                        <div></div>
                        <div></div>
                    </div>
                </Card>
                <Card
                    src="/googlesearch.png"
                    alt="Google Search"
                    title="Google Search"
                    caption="NextJS + TailwindCSS app using Programmable Search Engine"
                    redirect="https://google-clone-giohax.vercel.app/"
                    color="bg-blue-400"
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
                    color="bg-yellow-700"
                    colSpan="col-span-3"
                />
                <Card
                    src="/todo.png"
                    alt="Microsoft Todo"
                    title="Microsoft Todo"
                    caption="Javascript app with MVC architecture"
                    redirect="https://glittering-daifuku-fd04cd.netlify.app/"
                    color="bg-indigo-400"
                    colSpan="col-span-3"
                />

                <Card color="bg-pink-200" colSpan="col-span-6">
                    <div className="flex flex-col gap-28">
                        <div>
                            <h1 className="text-4xl font-bold mb-10 text-gray-700">
                                Interested in working together?
                            </h1>
                            <form>
                                <div className="flex flex-col gap-2 sm:flex-row">
                                    <input
                                        className="basis-1/2 rounded-md p-3"
                                        placeholder="Name"
                                    ></input>
                                    <input
                                        className="basis-1/2 rounded-md p-3"
                                        placeholder="Email"
                                    ></input>
                                </div>
                                <textarea className="mt-3 rounded-md p-3 w-full h-52"></textarea>
                            </form>
                        </div>
                        <div></div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Portfolio;
