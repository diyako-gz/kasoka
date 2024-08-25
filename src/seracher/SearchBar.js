import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className="flex justify-center mt-[50px]">
        <p className="font-semibold text-4xl">هتل مد نظرتو همین حالا پیدا کن</p>
      </div>
      <div className="flex justify-center mt-[20px]" dir="rtl">
        <div className="grid grid-cols-4">
          <div className="relative w-[200px] bg-yellow-600 rounded-2xl m-[10px] text-right">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="text-black absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              تعداد افراد
            </label>
          </div>
          <div className="relative w-[200px] bg-yellow-600 rounded-2xl m-[10px] text-right">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="text-black absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              تعداد ستاره هتل
            </label>
          </div>
          <div className="relative w-[200px] bg-yellow-600 rounded-2xl m-[10px] text-right">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="text-black absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              نام هتل
            </label>
          </div>
          <div className="w-[100px] bg-yellow-600 rounded-2xl m-[10px] text-right flex justify-center items-center">
            <button
              type="button"
              className="focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
