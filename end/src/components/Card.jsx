export default function Card({ product, idx }) {
    return (
        <>
            <div className={`h-full flex flex-col justify-center items-center border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] ${idx % 2 === 0 ? "bg-blue-400" : "bg-yellow-400"}`}>
                <div className="flex h-full">
                    <img
                        src={product.imgUrl}
                        alt="product image"
                        className="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    />
                </div>
                <div className="flex flex-col divide-y divide-black h-full">
                    <b className="mt-5">{product.title}</b>
                    <p className="line-clamp-3">
                        {product.synopsis}
                    </p>
                </div>
            </div>
        </>
    )
}