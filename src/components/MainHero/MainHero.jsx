import React from "react";

const MainHero = () => {
	const backgroundStyle = {
		backgroundImage: "url('https://chemonics.com/wp-content/uploads/2018/02/Bangladesh_AUHC_hero_gradient_1.jpg')",
		backgroundColor: "rgba(0, 0, 0.90, 0.50)",
		backgroundBlendMode: "multiply",
	  };
  return (
	  <section style={backgroundStyle } className="bg-gray-100 text-gray-800 min-h-[80vh]">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center ">
        <div className="mt-40">
          <h1 className="text-4xl text-white bg-opacity-70 font-bold leading-none sm:text-5xl">
					  আমাদের সমাজভিত্তিক ডিজিটাল স্বাস্থ্য সেবা প্রকল্প
					  <br />
					  <br/>
					  <span className="text-cyan-300">SOCIAL INNOVATION </span>
					  <br />
					  IN
					  <br/>
					   HEALTH
            CARE
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg text-white">
            আমাদের  সমাজভিত্তিক ডিজিটাল স্বাস্থ্য সেবা প্রকল্প একটি সামাজিক
            উদ্ভাবনী সেবা কার্যক্রম। এই প্রকল্পের মাধ্যমে বাংলাদেশের যে কোন
            স্থান থেকে তথ্য-প্রযুক্তি ব্যবহার করে, যে কোন মানুষ ধর্ম-বর্ণ-বয়স বা
            নারী-পুরুষ নির্বিশেষে সাশ্রয়ী মূল্যে, প্রাথমিক স্বাস্থ্য পরামর্শ ও
            সেবা পেতে পারেন।
          </p>
          <div className="flex flex-wrap justify-center">
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
