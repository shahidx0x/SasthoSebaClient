import React from "react";

export default function AboutUs() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            আমাদের সম্পর্কে
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg break-all w-full ">
              আমাদের সমাজভিত্তিক ডিজিটাল স্বাস্থ্য সেবা প্রকল্প হলো একটি সামাজিক
              উদ্ভাবনী সেবা কার্যক্রম। এই প্রকল্পের মাধ্যমে বাংলাদেশের যে কোন
              স্থান থেকে তথ্য-প্রযুক্তি ব্যবহার করে, যে কোন মানুষ ধর্ম-বর্ণ-বয়স
              বা নারী-পুরুষ নির্বিশেষে সাশ্রয়ী মূল্যে, প্রাথমিক স্বাস্থ্য
              পরামর্শ ও সেবা পেতে পারেন।
              আমরা বিশ্বাস করি যে স্বাস্থ্য সেবা
              সকলের জন্য সাশ্রয়ী ও প্রাপ্য হওয়া উচিত, এবং আমরা আমাদের ডিজিটাল
              প্ল্যাটফর্মের মাধ্যমে এটি নিশ্চিত করার চেষ্টা করি। এই উদ্যোগ শুধু
              তথ্য-প্রযুক্তির শক্তি ব্যবহার করে বাংলাদেশের দূরবর্তী স্থানে
              স্বাস্থ্য সেবা প্রসারিত করে না, বরং সামাজিক বিভেদ দূরীভূত করার
              লক্ষ্যে কাজ করে। আমরা সকলের জন্য একটি সমাবেশী
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://www.aamc.org/sites/default/files/Workforce%20Report%201200x666.jpg"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
