import { useState } from "react";
import Navbar from './Navbar'
import Card from "./Card";
import productJson from './assets/products.json'

export default function HomePage({ setPage }) {
    const [products, setProducts] = useState(productJson);

    return (
        <>
            <Navbar setPage={setPage} />

            {/* search */}
            <div className="max-w-md mx-auto border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <div className="relative flex items-center w-full h-12 rounded-2xl bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-800 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.."
                    />
                </div>
            </div>

            {/* home */}
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                <main className="my-5 bg-white grid grid-cols-4 gap-5">
                    {products.map((product, index) => {
                        return (
                            <Card key={product.id} index={index} product={product} />
                        )
                    })}
                </main>
            </div>

        </>
    )
}