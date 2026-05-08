
export default function Product() {
    const data = [
        {

            img: "/sofa.png",
            price: "$3,450",
            description: "Aurelius Velvet Sofa",
            tag: "NEW ARRIVAL",
        },

        {
            img: "/cave_table.png",
            price: "$1,890",
            description: "Cove Travertine Table",
        },

        {
            img: "/dar_chair.png",
            price: "$1,250",
            description: "Elias Occasional Chair",
        },

        {
            img: "/library.png",
            price: "$2,100",
            description: "Horizon Oak Library",
        },

        {
            img: "/sofa.png",
            price: "$3,450",
            description: "Aurelius Velvet Sofa",
            tag: "NEW ARRIVAL",
        },

        {
            img: "/cave_table.png",
            price: "$1,890",
            description: "Cove Travertine Table",
        },

        {
            img: "/dar_chair.png",
            price: "$1,250",
            description: "Elias Occasional Chair",
        },

        {
            img: "/library.png",
            price: "$2,100",
            description: "Horizon Oak Library",
        },
    ];
    return (

        <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden" >
        <div className="w-full max-w-[95%] mx-auto grid grid-cols-1 justify-items-start">

    <div className="flex items-center p-5 gap-2 text-sm text-gray-500">

        <p className="hover:text-black cursor-pointer">
            Home
        </p>

        <p>&gt;</p>

        <p className="hover:text-black cursor-pointer">
            Furniture
        </p>

        <p>&gt;</p>

        <p className="text-black font-medium">
            Living
        </p>

    </div>


    <div className="flex flex-col items-start text-left px-4 mb-10">

        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold">
            The Living Collection
        </h1>

        <p className="text-gray-500 mt-4 max-w-3xl text-sm sm:text-base leading-relaxed">
            A curated selection of artisanal seating, tables, and accents
            designed to
            <br className="hidden sm:block" />
            transform your shared spaces into sanctuaries of
            modern comfort.
        </p>

    </div>


    <div className="w-full justify-center">

        <div className="flex flex-col lg:flex-row px-3 lg:items-center lg:justify-between gap-5 py-5">

            {/* Left Side */}
            <div className="flex flex-wrap items-center gap-6 text-[13px] tracking-[2px] uppercase">

                <button className="flex items-center gap-2 font-semibold text-black">

                    <span className="text-lg">≡</span>

                    Filter
                </button>

                <button className="text-gray-500 hover:text-black transition">
                    Category
                </button>

                <button className="text-gray-500 hover:text-black transition">
                    Material
                </button>

                <button className="text-gray-500 hover:text-black transition">
                    Price
                </button>

                <button className="text-gray-500 hover:text-black transition">
                    Color
                </button>

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 text-[13px] tracking-[2px] uppercase">

                <p className="text-gray-500">
                    Sort By:
                </p>

                <select className="bg-transparent outline-none font-semibold cursor-pointer">

                    <option>Featured</option>

                    <option>Newest</option>

                    <option>Price: Low to High</option>

                    <option>Price: High to Low</option>

                </select>

            </div>

        </div>

    </div>

</div>

            <div className="grid grid-cols-1 justify-items-center  sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

                {data.map((item, index) => (
                    <div
                        key={index}
                        className=" p-4"
                    >

                        <div className="relative">

                            {/* Button */}
                            {item.tag && (
                                <button
                                    className=" absolute text-[#27A770] top-3 left-3 bg-white hover:bg-[#27A770] hover:text-white  px-3  border border-[#27A770]   py-1 text-xs  " >
                                    {item.tag}
                                </button>
                            )}

                            {/* Image */}
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-[320px] object-cover rounded-lg"
                            />

                        </div>

                        <h1 className="mt-3 text-lg font-semibold">
                            {item.description}
                        </h1>

                        <p className="text-gray-500 text-sm mt-1">
                            {item.price}
                        </p>

                    </div>
                ))}

            </div>


            <div className="w-full flex flex-col items-center py-10">

                {/* Text */}
                <p className="text-gray-500 tracking-[3px] text-sm font-medium uppercase">
                    Showing 8 of 42 Items
                </p>

                {/* Progress Line */}
                <div className="w-full max-w-md h-[2px] bg-gray-200 mt-6 relative">

                    <div className="w-[20%] h-full bg-[#2BA36A]"></div>

                </div>

                {/* Button */}
                <button
                    className="
      mt-10
      w-full
      max-w-md
      border-2
      border-[#2BA36A]
      text-[#2BA36A]
      py-4
      tracking-[3px]
      text-sm
      font-semibold
      uppercase
      hover:bg-[#2BA36A]
      hover:text-white
      transition-all
      duration-300
    "
                >
                    Load More
                </button>

            </div>

        </div>
    )
}