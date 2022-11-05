import Head from "next/head";
import Portfolio from "../components/Portfolio";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Giovanni's Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="flex justify-center p-3 font-bold text-gray-700">
                GIOVANNI GONZAGA
            </header>
            <Portfolio />
        </div>
    );
}
