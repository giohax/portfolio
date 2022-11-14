import React from "react";
import Card from "./Card";
import Image from "next/image";

const Portfolio = () => {
    return (
        <div className="flex justify-center pb-10">
            <div className="flex flex-col sm:grid grid-cols-6 gap-5 p-5 pb-0 max-w-5xl">
                <Card color="bg-stone-100" colSpan="col-span-4">
                    <div className="flex flex-col gap-28">
                        <div>
                            <h1 className="text-4xl font-bold mb-10 text-gray-700">
                                Hello, I&apos;m Giovanni, a React Frontend
                                Specialist with more than 5 years of experience
                            </h1>
                            <p className="text-gray-600 text-md">
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
                    caption="A NextJS application that mimics the real Google Search website. Users can enter any keyword into the search and it will fetch data using the Programmable Search Engine provided by Google. After a request, top ten results will be given back as a response. Users can also switch to the Images tab which will display the top ten images. It utilizes server side pagination so every time the next page is clicked, new data is requested. Users can click the 'I'm feeling lucky' to get search results from a random word. Users can login to the website using NextAuth. TailwindCSS is used for styling the website."
                    redirect="https://google-clone-giohax.vercel.app/"
                    color="bg-blue-500"
                    colSpan="col-span-6"
                />
                <Card
                    src="/imdb.png"
                    alt="IMDB"
                    title="IMDB"
                    caption="A NextJS application that mimics the real IMDB website. Upon arriving at the website, users will see the top trending movies. Users can click the 'Top Rated' button to display the top rated movies. Each request for the movies is sent to TMDB API. TailwindCSS is used for styling the website."
                    redirect="https://imdb-clone-giohax.vercel.app/"
                    color="bg-neutral-700"
                    colSpan="col-span-6"
                />

                <Card
                    src="/searchbook.png"
                    alt="Searchbook"
                    title="Searchbook"
                    caption="A ReactJS application that fetches data from Google Books API. Upon arrival, users are presented with a search button that will allow them to search a book in the vast online library. Each request to the server is debounced, which means it will only request once the user stops typing. The whole state of the application is managed with Redux, and requesting asynchronous data is handled by Redux Thunk. Each book can be added to the wishlist cart, and each item can be removed from the wishlist cart. TailwindCSS is used for styling the design of the website."
                    redirect="https://searchbook-giohax.vercel.app/"
                    color="bg-yellow-700"
                    colSpan="col-span-6"
                />
                <Card
                    src="/todo.png"
                    alt="Microsoft Todo"
                    title="Microsoft Todo"
                    caption="A Javascript application that mimics the Microsoft Todo app. It is built with Vanilla Javascript, HTML5, and CSS3. It utilizes an MVC architecture with a custom state management implementation. Users can add a to-do and check off a to-do. Information is saved in local storage and can also be fetched from JSONPlaceholder API."
                    redirect="https://glittering-daifuku-fd04cd.netlify.app/"
                    color="bg-indigo-400"
                    colSpan="col-span-6"
                />

                <Card color="bg-pink-200" colSpan="col-span-6">
                    <div className="flex flex-col gap-14">
                        <div>
                            <h1 className="text-4xl font-bold mb-10 text-gray-700">
                                Interested in working together?
                            </h1>
                            <p className="text-md">
                                Contact me at 985-299-1875 or email me at
                                giovanniantra@gmail.com{" "}
                            </p>
                        </div>
                        <div></div>
                    </div>
                </Card>

                <Card color="bg-slate-200" colSpan="col-span-6">
                    <div className="flex flex-col gap-14">
                        <div>
                            <h1 className="text-4xl font-bold mb-10 text-gray-700">
                                Resume
                            </h1>
                            <iframe
                                className="w-full h-screen"
                                src="https://docs.google.com/document/d/e/2PACX-1vT-NQZbPcFoBqAMZW1XB2U25eogggFJxYPW2tDj0YBoDpK1k8XZP-7IXYsVCx6NKN4_3ZvoeQIKq5bI/pub?embedded=true"
                            ></iframe>
                        </div>
                        <div></div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Portfolio;
