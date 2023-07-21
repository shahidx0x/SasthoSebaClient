import React, { useState } from 'react'

const MedicineHero = () => {
  const [menu, setMenu] = useState(false);
  const backgroundStyle = {
		backgroundImage: "url('https://c1.wallpaperflare.com/preview/688/137/178/drugs-medicine-medication-pills.jpg')",
		backgroundColor: "rgba(0, 0, 0.90, 0.70)",
		backgroundBlendMode: "multiply",
	  };
  return (
    <>
      <div className="relative w-full h-full lg:h-[30rem] pb-10">
      <section style={backgroundStyle } className="bg-gray-100 text-gray-800 min-h-[80vh]">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center ">
        <div className="mt-40">
          <h1 className="text-4xl text-white bg-opacity-70 font-bold leading-none sm:text-5xl">
          আমাদের অনলাইন ঔষধ স্টোর দেখুন।
				
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg text-white">
          আমাদের অনলাইন ঔষধ স্টোরে আপনি সম্পূর্ণ আইনিক ওষুধ পেতে পারেন। আমরা বিশ্বস্ত ওষুধ প্রতিষ্ঠানগুলির সরবরাহকারী হয়ে কাজ করি যাতে আপনার সুরক্ষা এবং মনঃপূর্বক ব্যবহারের নিশ্চিততা থাকে। আপনি অনলাইনে সহজেই অর্ডার করতে পারেন এবং আমাদের বিশেষজ্ঞদের পরামর্শ সম্পর্কে জিজ্ঞাসা করতে পারেন।
          </p>
          <div className="flex flex-wrap justify-center">
        
          </div>
        </div>
      </div>
    </section>
      </div>

 
    </>
  );
}

export default MedicineHero