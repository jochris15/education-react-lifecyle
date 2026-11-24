import { useState } from "react";
import Navbar from "../components/Navbar";
import productsJson from '../assets/products.json'
import Card from "../components/Card";

export default function Home({ setPage }) {
    const [products, setProducts] = useState(productsJson)

    return (
        <>
            <Navbar setPage={setPage} />
            {/* home */}
            <div id="PAGE-HOME" className="min-h-screen flex items-center justify-center">
                <main className="my-5 bg-white grid grid-cols-4 gap-5">
                    {products.map((product, idx) => {
                        return <Card product={product} key={product.id} idx={idx} />
                    })}
                </main>
            </div>
        </>
    )
}