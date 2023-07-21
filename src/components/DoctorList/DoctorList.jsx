import { useParams } from "react-router-dom";
import useDoctorlist from "../../hooks/useDoctorlist";
import { DoctorTypeCard } from "./DoctorTypeCard";


export const DoctorList = () => {
  const [doctorlist] = useDoctorlist();
  const prm = useParams();
  const backgroundStyle = {
		backgroundImage: "url('https://wallpaperaccess.com/full/3718207.jpg')",
		backgroundColor: "rgba(0, 0, 0.90, 0.50)",
		backgroundBlendMode: "multiply",
	  };

  return (
    <>
        {/* // <section>
    //   <header class="bg-white dark:bg-gray-900">
    //     <div class="container px-6 py-16 mx-auto">
    //       <div class="items-center lg:flex">
    //         <div class="w-full lg:w-1/2">
    //           <div class="lg:max-w-lg">
    //             <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
             
    //               আমাদের বিশেষজ্ঞদের সাথে পরিচিত হন
    //               <br /> <span class="text-blue-500 mt-5"> {prm.typeOfdoctor}</span>
    //               <span className="ml-3">Doctor</span>
    //             </h1>

    //             <p class="mt-3 text-gray-600 dark:text-gray-400">
    //             আমাদের বিশেষজ্ঞ ডাক্তাররা বিভিন্ন মেডিকেল ক্ষেত্রের অভিজ্ঞ এবং সক্ষম। তাঁরা আপনার স্বাস্থ্য সম্পর্কিত সমস্যার সঠিক সমাধান করতে প্রতিশ্রুতিবদ্ধ। তাঁরা আপনার সেবার জন্য সর্বদা প্রস্তুত এবং আপনার স্বাস্থ্য পরিচর্যা নিশ্চিত করতে সদা নিরন্তর চেষ্টা করছে।
    //             </p>

    //             <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
    //             এখনই তাদের সাথে দেখা করুন
    //             </button>
    //           </div>
    //         </div>

    //         <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
    //           <img
    //             class="w-full h-full lg:max-w-3xl rounded-2xl shadow-xl"
    //             src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_720,h_600/https://www.expacare.com/wp-content/uploads/2018/06/shutterstock_718155163-720x600.jpg"
    //             alt="Catalogue-pana.svg"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <div class="min-h-screen bg-base-200">
    //     <div className="ml-10  mb-10 flex flex-wrap gap-10">
    //       {doctorlist
    //         .filter((eachData) => eachData.department === prm.typeOfdoctor)
    //         .map((fil) => (
    //           <DoctorTypeCard data={fil} />
           
    //         ))}
    //     </div>
    //   </div>
    // </section> */}
    <section style={backgroundStyle } className="bg-gray-100 text-gray-800 min-h-[50vh]">
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center ">
      <div className="mt-40">
        <h1 className="text-4xl text-white bg-opacity-70 font-bold leading-none sm:text-5xl">
        আমাদের বিশেষজ্ঞদের সাথে পরিচিত হন
      
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg text-white">
        আমাদের বিশেষজ্ঞ ডাক্তাররা বিভিন্ন মেডিকেল ক্ষেত্রের অভিজ্ঞ এবং সক্ষম। তাঁরা আপনার স্বাস্থ্য সম্পর্কিত সমস্যার সঠিক সমাধান করতে প্রতিশ্রুতিবদ্ধ। তাঁরা আপনার সেবার জন্য সর্বদা প্রস্তুত এবং আপনার স্বাস্থ্য পরিচর্যা নিশ্চিত করতে সদা নিরন্তর চেষ্টা করছে।
        </p>
       
        </div>
       
      </div>
   
      </section>
      <section className="mt-10 pl-28">
      <div className="ml-10  mb-10 flex flex-wrap gap-10">
           {doctorlist
             .filter((eachData) => eachData.department === prm.typeOfdoctor)
             .map((fil) => (
               <DoctorTypeCard data={fil} />
           
             ))}
         </div>
      </section>
    </>
   
  );
};
