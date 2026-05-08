import { Roboto, Inter, Noto_Serif } from 'next/font/google'


const noto = Noto_Serif({
    subsets: ['latin'],
    weight: ['400', '700', '600']
})
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
    return (
        <div className={inter.className}>
            {  /* start here */}
            <div className="max-w-7xl mx-auto flex mt-10 flex-col md:flex-row items-center gap-8 md:gap-12 px-4 md:px-10">

                {/* TEXT */}
                <div className="py-2 md:w-1/2">

                    <p className={`${inter.className} tracking-[2px] md:tracking-[3px] text-xs md:text-sm text-[#615E57] uppercase`}>
                        Inquiry & Connection
                    </p>

                    <h3 className={`${noto.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mt-3 md:mt-4`}>
                        Get in touch with <br className="hidden sm:block" />
                        our atelier.
                    </h3>

                    <p className={`${inter.className} text-sm md:text-base text-[#444748] mt-3 md:mt-4 leading-relaxed`}>
                        Whether you are seeking bespoke pieces or interior consultation,
                        <br className="hidden sm:block" />
                        our team of curators is here to assist in your design journey.
                    </p>

                </div>

                {/* IMAGE */}
                <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] relative">
                    <img
                        src="/contact.png"
                        alt="contact"
                        className="absolute inset-0 w-full h-full object-cover "
                    />
                </div>

            </div>

            {/* Contact form and Contact details */}




            <div className={`${inter.className} text-[#000000] mt-16 md:mt-20 lg:mt-28 px-4 md:px-8`}>

                {/* Main Container */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* ================= FORM ================= */}
                    <div className="bg-[#f5f3ef] p-6 md:p-10">

                        <h2 className={`${noto.className} text-lg md:text-xl mb-6 `}>
                            Send an Inquiry
                        </h2>

                        <form className="space-y-6">

                            {/* Row 1 */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-xs md:text-sm tracking-widest  mb-2">
                                        FULL NAME
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 bg-transparent p-2.5 md:p-3 outline-none focus:border-black"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs md:text-sm tracking-widest  mb-2">
                                        EMAIL ADDRESS
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 bg-transparent p-2.5 md:p-3 outline-none focus:border-black"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-xs md:text-sm tracking-widest  mb-2">
                                    SUBJECT
                                </label>
                                <select className="w-full border border-gray-300 bg-transparent p-2.5 md:p-3 outline-none focus:border-black">
                                    <option>Product Inquiry</option>
                                    <option>Support</option>
                                    <option>General Question</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs md:text-sm tracking-widest  mb-2">
                                    MESSAGE
                                </label>
                                <textarea
                                    rows="5"
                                    className="w-full border border-gray-300 bg-transparent p-2.5 md:p-3 outline-none focus:border-black"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button className="w-full sm:w-auto cursor-pointer px-6 py-3 bg-black text-white hover:bg-gray-800 transition">
                                SUBMIT REQUEST
                            </button>

                        </form>
                    </div>

                    {/* ================= CONTACT INFO ================= */}
                    <div className="p-6 md:p-10 bg-white">

                        <h2 className={`${noto.className} text-lg md:text-xl font-medium mb-8`}>
                            Concierge Services
                        </h2>

                        <div className="space-y-6">

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div>
                                    <p className="text-xs font-bold tracking-widest  uppercase">
                                        Email
                                    </p>
                                    <p className="text-gray-700 break-all">
                                        concierge@elysianinteriors.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div>
                                    <p className="text-xs font-bold tracking-widest  uppercase">
                                        Phone
                                    </p>
                                    <p className="text-gray-700">
                                        +1 (212) 555-0198
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-4">
                                <div>
                                    <p className="text-xs font-bold tracking-widest  uppercase">
                                        Hours
                                    </p>
                                    <p className="text-gray-700 text-sm">
                                        Mon - Fri: 09:00 - 18:00 EST <br />
                                        Sat: 10:00 - 16:00 EST
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Trade Program */}
                        <div className="mt-10 bg-gray-50   border border-gray-100">
                            <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                                Trade Program
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Specialized services and pricing for interior designers <br /> and architects.
                            </p>
                            <a href="#" className="text-sm cursor-pointer font-bold border-b-2 border-black pb-1 uppercase tracking-[2px]">
                                Apply Now
                            </a>
                        </div>

                    </div>

                </div>
            </div>




            {/* Global Boutiques */}



            <div className='my-20 flex flex-col justify-center items-center px-4'>

                {/* Heading */}
                <div className={`flex flex-col ${noto.className} items-center justify-center text-3xl md:text-4xl lg:text-[48px]`}>
                    <h1>Global Boutiques</h1>
                    <hr className='w-[48px] mt-5 border-[#615E57]' />
                </div>

                {/* Grid */}
                <div className="grid justify-items-center  gap-8 mt-10 w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Card 1 */}
                    <div className="flex flex-col text-left">
                    
                         <img className="w-full max-w-[280px] object-cover" src="/Elysian1.png" alt="SoHo" />

                        <div className="mt-3 py-2">
                            <h3 className={`text-[16px] ${noto.className}`}>
                                SoHo, New York
                            </h3>

                            <p className="text-[14px] md:text-[16px] text-[#444748]">
                                152 Greene Street <br />
                                New York, NY 10012
                            </p>

                            <h4 className="text-[14px] md:text-[16px] mt-2 cursor-pointer hover:underline">
                                VIEW DETAILS
                            </h4>
                        
                       </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col text-left">
                        <img className="w-full max-w-[280px] object-cover" src="/Elysian2.png" alt="London" />

                        <div className="mt-3 py-2">
                            <h3 className={`text-[16px] ${noto.className}`}>
                                Mayfair, London
                            </h3>

                            <p className="text-[14px] md:text-[16px] text-[#444748]">
                                42 Bruton Place <br />
                                London W1J 6NP
                            </p>

                            <h4 className="text-[14px] md:text-[16px] mt-2 cursor-pointer hover:underline">
                                VIEW DETAILS
                            </h4>
                        </div>
                    </div>

                    {/* Card 3 (CENTER ON TABLET) */}
                    <div className="flex flex-col  text-left sm:col-span-2 lg:col-span-1">
                        <img className="w-full max-w-[280px] object-cover" src="/Elysian3.png" alt="Paris" />

                        <div className="mt-3 py-2">
                            <h3 className={`text-[16px] ${noto.className}`}>
                                Le Marais, Paris
                            </h3>

                            <p className="text-[14px] md:text-[16px] text-[#444748]">
                                78 Rue de Turenne <br />
                                75003 Paris
                            </p>

                            <h4 className="text-[14px] md:text-[16px] mt-2 cursor-pointer hover:underline">
                                VIEW DETAILS
                            </h4>
                        </div>
                    </div>

                </div>
            </div>



            {/* email and subscribe */}


            <div className="w-full my-10 bg-[#EFEEEB] flex justify-center items-center px-4 py-10">

                <div className="w-full max-w-xl text-center">

                    {/* Heading */}
                    <h1 className="text-lg md:text-xl mb-3">
                        Join the Inner Circle
                    </h1>

                    {/* Text */}
                    <p className="text-sm md:text-base text-[#444748]">
                        Receive curated design insights, early access to new collections, and
                        invitations to our gallery events.
                    </p>

                    {/* Input + Button */}
                    <div className="border-b p-3 mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-0">

                        <input
                            type="text"
                            placeholder="Email address"
                            className="w-full bg-transparent outline-none py-2 text-sm"
                        />

                        <button className="text-sm font-medium whitespace-nowrap">
                            SUBSCRIBE
                        </button>

                    </div>

                </div>

            </div>



        </div>



    )
}