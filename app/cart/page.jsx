import { Poppins } from 'next/font/google';
import Navbar from '../components/header';

const popin = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function Selection() {
  return (
    <div
      className={`${popin.className} w-full min-h-screen flex flex-col items-center overflow-x-hidden`}
    >
      <Navbar />

      {/* Header */}
      <div className="flex justify-center flex-col mt-10 px-4 text-center">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[64px]">
          Your Selection
        </h1>

        <p className="text-[#615E57] text-sm sm:text-base">
          A curated collection of artisanal pieces for your home.
        </p>
      </div>

      {/* Main */}
      <div className="flex flex-col xl:flex-row w-full mt-10 lg:mt-20 justify-center gap-8 px-4 lg:px-8 max-w-7xl">

        {/* Product Section */}
        <div className="w-full xl:w-[65%]">

          {/* Product 1 */}
          <div className="flex flex-col md:flex-row w-full border-b gap-5 border-gray-300 pb-6">

            {/* Image */}
            <div className="w-full md:w-[240px] flex-shrink-0">
              <div className="w-full h-[220px] md:h-[240px] bg-gray-200 rounded-md overflow-hidden">
                <img
                  src="/sofa.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full flex flex-col justify-between">

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    The Aurelia Sectional
                  </h2>

                  <p className="text-sm text-[#A67C52] mt-1">
                    IN STOCK — SHIPS IN 2–3 WEEKS
                  </p>
                </div>

                <div className="text-lg font-medium text-gray-900">
                  $4,250.00
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center border border-gray-400 rounded px-3 py-1">
                  <button className="px-2">-</button>

                  <span className="px-3">1</span>

                  <button className="px-2">+</button>
                </div>

                <button className="text-sm text-gray-500 hover:text-black flex items-center gap-1">
                  🗑 REMOVE
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col md:flex-row w-full border-b mt-6 gap-5 border-gray-300 pb-6">

            {/* Image */}
            <div className="w-full md:w-[240px] flex-shrink-0">
              <div className="w-full h-[220px] md:h-[240px] bg-gray-200 rounded-md overflow-hidden">
                <img
                  src="/cave_table.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full flex flex-col justify-between">

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    The Aurelia Sectional
                  </h2>

                  <p className="text-sm text-[#A67C52] mt-1">
                    IN STOCK — SHIPS IN 2–3 WEEKS
                  </p>
                </div>

                <div className="text-lg font-medium text-gray-900">
                  $4,250.00
                </div>
              </div>

              <div className="flex justify-between items-center mt-6">
                <div className="flex items-center border border-gray-400 rounded px-3 py-1">
                  <button className="px-2">-</button>

                  <span className="px-3">1</span>

                  <button className="px-2">+</button>
                </div>

                <button className="text-sm text-gray-500 hover:text-black flex items-center gap-1">
                  🗑 REMOVE
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-12 justify-start">

            <div className="flex items-center gap-2">
              <img src="/tickIcon.png" className="w-[19px]" alt="" />

              <div>
                <h1 className="text-[14px]">Secure Checkout</h1>

                <p className="text-[12px] text-gray-400">
                  SSL Encrypted Payment
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img src="/carIcon.png" className="w-[19px]" alt="" />

              <div>
                <h1 className="text-[14px]">White Glove Delivery</h1>

                <p className="text-[12px] text-gray-400">
                  Full Setup & Disposal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <img src="/laughIcon.png" className="w-[19px]" alt="" />

              <div>
                <h1 className="text-[14px]">Concierge Service</h1>

                <p className="text-[12px] text-gray-400">
                  Dedicated Interior Support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full xl:w-[360px] bg-[#F4F3F1] flex flex-col gap-6 p-5 rounded-xl h-fit">

          <div className="rounded-xl ">
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">
              Order Summary
            </h2>

            <div className="space-y-4 text-[15px] text-gray-600">

              <div className="flex justify-between">
                <span>Subtotal</span>

                <span className="text-gray-900 font-medium">
                  $6,050.00
                </span>
              </div>

              <div className="flex justify-between">
                <span>Shipping (White-Glove)</span>

                <span className="text-gray-900 font-medium">
                  $250.00
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Taxes</span>

                <span className="text-gray-900 font-medium">
                  $484.00
                </span>
              </div>
            </div>

            <div className="border-t border-gray-300 my-5"></div>

            <div className="flex justify-between text-lg font-semibold text-gray-900">
              <span>Total</span>

              <span>$6,784.00</span>
            </div>
          </div>

          <button className="bg-[#3BA36C] hover:bg-[#2f8a5a] text-white py-3 rounded-lg">
            PROCEED TO CHECKOUT
          </button>

          {/* Features */}
          <div className="w-full flex flex-col gap-3">

            <div className="flex items-start gap-2">
              <img
                src="/lock.png"
                className="w-[16px] h-[16px]"
                alt=""
              />

              <p className="text-[12px] text-[#67645D] leading-relaxed">
                Payments processed by Stripe & Apple Pay
              </p>
            </div>

            <div className="flex items-start gap-2">
              <img
                src="/watch.png"
                className="w-[16px] h-[16px]"
                alt=""
              />

              <p className="text-[12px] text-[#67645D] leading-relaxed">
                30-day complimentary returns on all furniture
              </p>
            </div>
          </div>

          {/* Promo */}
          <div className="mt-4">

            <label className="text-[12px] text-gray-700">
              PROMO CODE
            </label>

            <div className="flex w-full mt-2">

              <input
                type="text"
                placeholder="Enter Code"
                className="flex-1 border px-4 py-2 outline-none"
              />

              <button className="px-5 border text-[#3BA36C] hover:bg-[#3BA36C] hover:text-white">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Room */}
      <div className="w-full max-w-7xl px-4 mt-16">

        <h1 className="text-[28px] sm:text-[36px] text-left">
          Complete the Room
        </h1>

        <div className="grid justify-items-center gap-8 mt-10 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* Card 1 */}
          <div className="flex flex-col text-left">
            <img
              className="w-full max-w-[320px] object-cover rounded-lg"
              src="/ottoman.png"
              alt=""
            />

            <div className="mt-3 py-2">
              <h3 className="text-[16px]">
                Milo Velvet Ottoman
              </h3>

              <p className="text-[14px] md:text-[16px] text-[#444748]">
                $850.00
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col text-left">
            <img
              className="w-full max-w-[320px] object-cover rounded-lg"
              src="/rug.png"
              alt=""
            />

            <div className="mt-3 py-2">
              <h3 className="text-[16px]">
                Terra Table Lamp
              </h3>

              <p className="text-[14px] md:text-[16px] text-[#444748]">
                $850.00
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col text-left">
            <img
              className="w-full max-w-[320px] object-cover rounded-lg"
              src="/lamp.png"
              alt=""
            />

            <div className="mt-3 py-2">
              <h3 className="text-[16px]">
                Nora Wool Rug
              </h3>

              <p className="text-[14px] md:text-[16px] text-[#444748]">
                $456.00
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col text-left">
            <img
              className="w-full max-w-[320px] object-cover rounded-lg"
              src="/artPrint.png"
              alt=""
            />

            <div className="mt-3 py-2">
              <h3 className="text-[16px]">
                Shift Abstract Print
              </h3>

              <p className="text-[14px] md:text-[16px] text-[#444748]">
                $450.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}