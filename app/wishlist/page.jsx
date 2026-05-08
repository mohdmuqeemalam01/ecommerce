export default function Wish() {

    const data = [
        {
            img: "/sofa.png",
            price: "$3,450",
            description: "Aurelius Velvet Sofa",
        },

        {
            img: "/cave_table.png",
            price: "$1,890",
            description: "Cove Travertine Table",
            desgin: 'LIMITED EDITION'
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
            img: "/diningtable.png",
            price: "$3,450",
            description: "Aurelius Velvet Sofa",
            tag: "BACK IN STOCK",
        },

        {
            img: "/cave_table.png",
            price: "$1,890",
            description: "Cove Travertine Table",
        },
    ];

    return (
        <div className="w-full min-h-screen flex flex-col items-center overflow-x-hidden">

            {/* Header */}



            {/* Grid */}
            <div className="w-full  max-w-[90%] flex items-center justify-center">
                <div className="w-full flex flex-col  text-left px-4 sm:px-6 lg:px-10 mb-10">

                    <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-semibold leading-tight">
                        My Saved Pieces
                    </h1>

                    <div className="w-full flex flex-col lg:flex-row w-full justify-between gap-5 lg:items-center mt-3">

                        <p className="text-gray-500 max-w-3xl text-sm sm:text-base leading-relaxed">
                            A curated selection of your favorite artisanal furniture and decor.
                            Keep track
                            <br className="hidden sm:block" />
                            of the elements that speak to your vision of a serene home.
                        </p>

                        <div className="flex sm:flex-col lg:flex-row  gap-3 w-full sm:w-auto">

                            <button className="border px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap hover:bg-black hover:text-white transition-all duration-300">
                                SHARE LIST
                            </button>

                            <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all duration-300">
                                ADD ALL TO CART
                            </button>

                        </div>

                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 pb-10">

                {data.map((item, index) => (
                    <div
                        key={index}
                        className="w-full"
                    >

                        <div className="relative overflow-hidden">

                            {/* Limited Edition */}
                            {item.desgin && (
                                <button
                                    className="absolute bg-[#FFDEA5] bottom-3 left-3 px-3 py-1 text-[10px] sm:text-xs"
                                >
                                    {item.desgin}
                                </button>
                            )}

                            {/* Tag */}
                            {item.tag && (
                                <button
                                    className="absolute bg-white top-3 left-3 px-3 py-1 text-[10px] sm:text-xs"
                                >
                                    {item.tag}
                                </button>
                            )}

                            {/* Remove */}
                            <button
                                className="absolute text-[#27A770] text-xl sm:text-2xl top-3 right-3 bg-white px-2 rounded hover:bg-red-400 hover:text-white border border-[#27A770] transition-all duration-300"
                            >
                                X
                            </button>

                            {/* Image */}
                            <img
                                src={item.img}
                                alt=""
                                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
                            />

                        </div>

                        {/* Content */}
                        <div className="flex flex-row justify-between items-start gap-3 mt-3">

                            <h1 className="text-base sm:text-lg font-semibold">
                                {item.description}
                            </h1>

                            <p className="text-gray-500 text-sm whitespace-nowrap">
                                {item.price}
                            </p>

                        </div>

                        {/* Footer */}
                        <div className="flex flex-row mt-4 border-t border-[#E7E5E4] pt-3 justify-between items-center">

                            <p className="text-gray-500 hover:text-black cursor-pointer text-sm sm:text-base">
                                View Details
                            </p>

                            <p className="text-[#FFDEA5] hover:text-orange-400 cursor-pointer text-sm sm:text-base">
                                ADD TO CART
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}