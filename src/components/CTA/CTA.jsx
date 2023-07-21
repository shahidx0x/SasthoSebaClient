import React from "react";
function CTA() {
  return (
    <>
      <div className="md:mx-auto md:container px-4">
        <div className="pt-10 md:pt-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                    মেডিকেল সাপোর্ট
                  </h1>
                  <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    আমাদের সমাজভিত্তিক ডিজিটাল স্বাস্থ্য সেবা প্রকল্প হলো একটি
                    সামাজিক উদ্ভাবনী সেবা কার্যক্রম। এই প্রকল্পের মাধ্যমে
                    বাংলাদেশের যে কোন স্থান থেকে তথ্য-প্রযুক্তি ব্যবহার করে, যে
                    কোন মানুষ ধর্ম-বর্ণ-বয়স বা নারী-পুরুষ নির্বিশেষে সাশ্রয়ী
                    মূল্যে, প্রাথমিক স্বাস্থ্য পরামর্শ ও সেবা পেতে পারেন। আমরা
                    বিশ্বাস করি যে স্বাস্থ্য সেবা সকলের জন্য সাশ্রয়ী ও প্রাপ্য
                    হওয়া উচিত, এবং আমরা আমাদের ডিজিটাল প্ল্যাটফর্মের মাধ্যমে এটি
                    নিশ্চিত করার চেষ্টা করি।
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                 
                  </div>
                </div>
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
                  এমার্জেন্সি এম্বুলেন্স সেবা
                  </h1>
                  <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                  আমরা এমার্জেন্সি এম্বুলেন্স সেবা সমর্থন করি, যা আপনাকে জরুরী মেডিকেল সহায়তা প্রদানের জন্য নির্বিঘ্নে হাসপাতালে পৌঁছে দেবে। এই সেবা সবসময় প্রস্তুত রয়েছে এবং আপনার জরুরী চিকিৎসা প্রয়োজনীয়তা পূরণের জন্য তাৎপর।
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                 
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="./am.png"
                  alt
                />
                {/* <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20 mt-16">
                  <div className="flex items-center justify-between w-full sm:w-full mb-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-yellow-200 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-discount"
                          width={32}
                          height={32}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={9} y1={15} x2={15} y2={9} />
                          <circle cx="9.5" cy="9.5" r=".5" />
                          <circle cx="14.5" cy="14.5" r=".5" />
                          <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                          2,330
                        </h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                          Avg Online Support
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pl-3 text-green-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-trending-up"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                        <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                          7.2%
                        </p>
                      </div>
                      <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                        Increase
                      </p>
                    </div>
                  </div>
                  <div className="relative mb-3">
                    <hr className="h-1 rounded-sm bg-gray-200" />
                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                  </div>
                  <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                    Yearly Goal
                  </h4>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                  অনলাইনে ঔষধ 
                  </h1>
                  <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                  আমাদের সাথে যোগাযোগ করে আপনি অনলাইনে ঔষধ কিনতে পারেন। আমাদের অনলাইন ঔষধ দোকান আপনাকে সকল প্রকারের মেডিকেল সরবরাহ এবং ঔষধ চিকিৎসা প্রয়োজনীয়তা পূরণের জন্য অন্যান্য সুবিধা সরবরাহ করে।
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
            
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="./med.png"
                  alt
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA;
