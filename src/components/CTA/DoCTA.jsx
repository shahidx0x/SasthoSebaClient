import React from "react";
import { Link } from "react-router-dom";

const DoCTA = () => {
  const back = {
    backgroundImage: "url('https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80')",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
    // <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
    //   <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
    //     <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
    //       <div>
    //         <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
    //         বিশেষজ্ঞ ডাক্তারদের দল
    //         </p>
    //       </div>
    //       <div className="mt-4 lg:w-4/5 xl:w-3/5">
    //         <p className="text-base leading-6 text-gray-600">
    //         আমাদের বিশেষজ্ঞ ডাক্তারদের দল বিভিন্ন মেডিকেল বিষয়ে বিশেষজ্ঞ। তাদের প্রশিক্ষণ, জ্ঞান এবং অভিজ্ঞতা আপনার স্বাস্থ্য সম্পর্কিত সমস্যার সঠিক সমাধান করতে সাহায্য করবে।
    //         </p>
    //       </div>
    //       <div className="mt-16 w-full">
    //         <button className="px-4 bg-purple-600 flex justify-between items-center w-[60rem] lg:w-[20rem] h-20 rounded-xl text-white hover:bg-purple-700">
    //           <Link to="/doctors/Chest" className="text-xl font-medium leading-5">
    //           এখনই অ্যাপয়েন্টমেন্ট নিন
    //           </Link>
    //           <svg
    //             width="32"
    //             height="32"
    //             viewBox="0 0 32 32"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M6.66663 16H25.3333"
    //               stroke="white"
    //               strokeWidth="1.5"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M20 21.3333L25.3333 16"
    //               stroke="white"
    //               strokeWidth="1.5"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M20 10.6667L25.3333 16"
    //               stroke="white"
    //               strokeWidth="1.5"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //     <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
    //       <div>
    //         <img
    //           className="hidden lg:block  border rounded-md border-indigo-500 p-1"
    //           src="https://media.istockphoto.com/id/942262770/fr/photo/portrait-de-femme-m%C3%A9decin-contre-le-mur-%C3%A0-lh%C3%B4pital.jpg?s=612x612&w=0&k=20&c=6L_tOeiZc7JYlx6lg0jVGX8WCGaokvW5ie0nE5MWWFc="
    //           alt="sofa"
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
    //         <div>
    //           <img
    //             className="hidden lg:block border rounded-md border-indigo-500 p-1"
    //             src="https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-37-1.jpg"
    //             alt="chairs"
    //             width="400px"
    //           />
    //           <img
    //             className="w-60 sm:w-auto lg:hidden  border rounded-md border-indigo-500 p-1"
    //             src="https://thumbs.dreamstime.com/b/happy-afro-man-doctor-portrait-arms-crossed-happy-afro-man-doctor-portrait-arms-crossed-129165749.jpg"
    //             alt="chairs"
    //           />
    //         </div>
    //         <div>
    //           <img
    //             className="hidden lg:block  border rounded-md border-indigo-500 p-1"
    //             src="https://img.freepik.com/premium-photo/portrait-smiling-doctor-white-uniform-standing-with-crossed-hands-grey-background_168410-1747.jpg"
    //             alt="chairs"
    //           />
    //           <img
    //             className="w-80 sm:w-auto lg:hidden  border rounded-md border-indigo-500 p-1"
    //             src="https://www.kingstonhospital.com.bd/wp-content/uploads/2020/10/Dr.-Al-Manun-Shahriar.jpg"
    //             alt="chairs"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-base">
      <div className="container flex flex-col mx-auto lg:flex-row lg:gap-16">
      <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
      <h2 className="text-2xl lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black">
      বিশেষজ্ঞ ডাক্তারদের দল
          </h2>
          <br />
          <br/>
          <h2 className="text-3xl font-semibold leading-none">
        
          </h2>
          <p className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
          আমাদের বিশেষজ্ঞ ডাক্তারদের দল বিভিন্ন মেডিকেল বিষয়ে বিশেষজ্ঞ। তাদের প্রশিক্ষণ, জ্ঞান এবং অভিজ্ঞতা আপনার স্বাস্থ্য সম্পর্কিত সমস্যার সঠিক সমাধান করতে সাহায্য করবে।
          </p>
          <Link to="/doctors/Chest" className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-cyan-600 text-gray-50">
          এখনই অ্যাপয়েন্টমেন্ট নিন
          </Link>
        </div>
        <div style={back} className="w-full lg:w-1/3"></div>
       
      </div>
    </section>
  );
};

export default DoCTA;
