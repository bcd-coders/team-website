"use client";
import { useState } from "react";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";


const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4">Simple and Affordable Pricing</h1>
            <p className="text-xl text-gray-400">We offer Basic and Premium plans that cater to different budgets and goals. Our commitment to affordability means you get exceptional value without compromising on quality. Explore our pricing options to find the plan that best suits your requirements, and remember, we stand behind our work with a satisfaction guarantee.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">

        <div className="w-full">
          <div className="flex justify-center md:mb-12 lg:mb-16" data-wow-delay=".1s">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="w-full max-w-screen-xl mx-auto">

          <div className="max-w-6xl mx-auto px-4 sm:px-500">
            <div className="flex flex-col md:flex-row md:gap-4 sm:gap-4">
              <PricingBox
                packageName="Basic Site"
                price={isMonthly ? "120" : "580"}
                duration={isMonthly ? "mo" : "yr"}
                subtitle="Our Basic Plan is perfect for individuals and small businesses who want a straightforward website. Here's what you get"
              >
                <OfferList text="Simple Static Website" status="active" />
                <OfferList text="Works on Phones and Computers" status="active" />
                <OfferList text="Email Support" status="active" />
                <OfferList text="Free Hosting" status="active" />
              </PricingBox>
              <PricingBox
                packageName="Premium Site"
                price={isMonthly ? "420" : "860"}
                duration={isMonthly ? "mo" : "yr"}
                subtitle="Our Premium Plan is the ultimate choice for those who desire a top-tier website with advanced features and a polished appearance. Here's what's included"
              >
                <OfferList text="Awesome Animated Website" status="active" />
                <OfferList text="Works on Phones and Computers" status="active" />
                <OfferList text="Email Support" status="active" />               
                <OfferList text="Hosting and Website Address provided" status="active" />
                <OfferList text="Updates and Maintenance of the site" status="active" />
              </PricingBox>
            </div>
          </div>
        </div>


        <div className="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            />
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
