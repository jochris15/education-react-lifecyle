import Navbar from '../components/Navbar'
export default function AddMovie({ setPage }) {

    return (
        <>
            <Navbar setPage={setPage} />
            {/* add form */}
            <form className="p-5 mt-5 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-red-400">
                <h1 className="text-2xl font-bold text-center mb-4">Add New Movie</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="label">
                            <span className="font-bold">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Synopsis</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Synopsis"
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Trailer (URL)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Trailer URL"
                            className="bg-white  w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Image (URL)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Image URL"
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Rating</span>
                        </label>
                        <input
                            type="number"
                            placeholder='Input Rating'
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="font-bold">Genre</span>
                        </label>
                        <select
                            className="bg-white w-full px-3 py-2 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                            name="genre"
                        >
                            <option value='test'>test</option>
                        </select>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="w-full mt-5 py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Add New Movie
                    </button>
                </div>
            </form>
        </>
    )
}