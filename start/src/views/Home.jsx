import { useState } from "react";
import Navbar from "../components/Navbar";
import moviesJson from '../assets/movies.json'
import Card from "../components/Card";

export default function Home({ setPage }) {
    const [movies, setMovies] = useState(moviesJson)

    return (
        <>
            <Navbar setPage={setPage} />

            {/* Search */}
            <form className="max-w-md mx-auto border-2 border-black rounded-lg shadow-[2px_2px_0px_rgba(0,0,0,1)] mt-5">
                <div className="relative flex items-center w-full h-12 rounded-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input className="peer h-full w-full outline-none text-sm text-gray-800 pr-2" type="text" id="search" placeholder="Search something.." />
                </div>
            </form>

            {/* home */}
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                <main className="my-5 bg-white grid grid-cols-6 gap-5">
                    {movies.map((movie, idx) => {
                        return <Card movie={movie} key={movie.id} idx={idx} />
                    })}
                </main>
            </div>
        </>
    )
}