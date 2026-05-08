import { Roboto, Inter, Noto_Serif } from 'next/font/google'
const noto = Noto_Serif(
    {
        subsets: ['Latin']
    }


)
const inter = Inter({
    subsets: ['Latin']
})


export default function Homep() {
    return (
        <div className={inter.className}>


            {/* Starting image or poster */}
            <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] w-full">

                <img
                    src="/home1.webp"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt=""
                />

                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">

                    {/* Heading */}
                    <h1
                        className={`${noto.className}
        text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]
        leading-[36px] sm:leading-[44px] md:leading-[56px] lg:leading-[70px]
        tracking-[-0.5px] md:tracking-[-1px] lg:tracking-[-1.28px]
        text-white font-normal`}
                    >
                        Artisanal Craftsmanship for<br className="hidden sm:block" />
                        Modern Living
                    </h1>

                    {/* Paragraph */}
                    <p className="text-white/90 mt-4 mb-6 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[90%] md:max-w-[600px]">
                        Curated furniture that balances architectural precision with effortless
                        <br className="hidden sm:block" /> comfort.
                    </p>

                    {/* Button */}
                    <button className="bg-[#2CA873] px-6 sm:px-8 rounded md:px-10 py-2 md:py-3 text-[12px] sm:text-[14px] md:text-[16px] tracking-[1px] sm:tracking-[2px] text-white">
                        EXPLORE COLLECTIONS
                    </button>
                </div>
            </div>



            {/*  Text Cart */}
            <div className='flex justify-center text-[14px] sm:text-[15px] md:text-[16px] px-4'>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-15 md:mt-15">

    <div className="flex flex-col justify-center items-center text-center">
      <img src="/icon1.png" alt="" className='h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px] mb-2' />
      <h1 className="text-[14px] sm:text-[15px] md:text-[16px]">MASTER CRAFTSMANSHIP</h1>
      <p className='px-2 sm:px-4 md:px-5 text-[#67645D] font-normal leading-relaxed'>
        Built by artisans with generations of
        expertise in hand-finished joinery.
      </p>
    </div>

    <div className="flex flex-col justify-center items-center text-center">
      <img src="/icon2.png" alt="" className='h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px] mb-2' />
      <h1 className="text-[14px] sm:text-[15px] md:text-[16px]">MASTER CRAFTSMANSHIP</h1>
      <p className='px-2 sm:px-4 md:px-5 text-[#67645D] font-normal leading-relaxed'>
        Built by artisans with generations of
        expertise in hand-finished joinery.
      </p>
    </div>

    <div className="flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-span-1 sm:justify-self-center">
      <img src="/icon3.png" alt="" className='h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px] mb-2' />
      <h1 className="text-[14px] sm:text-[15px] md:text-[16px]">MASTER CRAFTSMANSHIP</h1>
      <p className='px-2 sm:px-4 md:px-5 text-[#67645D] font-normal leading-relaxed'>
        Built by artisans with generations of
        expertise in hand-finished joinery.
      </p>
    </div>

  </div>
</div>




        </div>
    )
}