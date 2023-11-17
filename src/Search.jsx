import React from "react";

const Search = () => {
  return (
    <div className=" max-w-[1400px] mx-auto lg:px-8 max-sm:px-6 py-10">
      <h1 className=" text-3xl font-bold capitalize mb-8 max-sm:text-xl lg:mx-0 md:mx-8">
        Seach details
      </h1>
      <div className=" lg:grid grid-cols-10 gap-8">
        <aside className=" col-span-3 max-md:col-span-10 max-sm:px-0">
          <div>
            <form
              action=""
              className="flex flex-col bg-primaryColor py-6 px-4 rounded-t lg:mx-0 md:mx-8"
            >
              <label className=" text-white text-base font-bold mb-2">
                Where are you travelling?
              </label>
              <div className=" flex items-center relative ">
                <input
                  type="text"
                  placeholder="Search for a place or activity"
                  className=" py-2 indent-3 rounded-md outline-0 placeholder:text-gray-400 w-full "
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 absolute right-2 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </form>

            <details className=" border border-gray-300 rounded-b p-4 lg:mx-0 md:mx-8">
              <summary className=" underline text-gray-600 mb-4 cursor-pointer w-fit md:mx-4">
                Advanced Filter
              </summary>
              <form action="" className=" flex flex-col">
                <div className=" flex flex-col">
                  <label
                    className=" text-sm text-gray-800 mb-2 capitalize"
                    htmlFor=""
                  >
                    Filter By location
                  </label>
                  <input
                    type="text"
                    className="py-2 border border-gray-300 outline-0 indent-3 rounded-md focus:border-primaryColor"
                  />
                </div>
                <div className=" flex flex-col">
                  <label
                    className=" text-sm text-gray-800 mb-2 mt-4 capitalize"
                    htmlFor=""
                  >
                    Price From
                  </label>
                  <input
                    type="number"
                    className="py-2 border border-gray-300 outline-0 indent-3 rounded-md focus:border-primaryColor"
                  />
                </div>
                <div className=" flex flex-col">
                  <label
                    className=" text-sm text-gray-800 mb-2 mt-4 capitalize"
                    htmlFor=""
                  >
                    Price To
                  </label>
                  <input
                    type="number"
                    className="py-2 border border-gray-300 outline-0 indent-3 rounded-md focus:border-primaryColor"
                  />
                </div>
                <div className=" flex flex-col mb-6">
                  <label
                    className=" text-sm text-gray-800 mb-2 mt-4 capitalize"
                    htmlFor=""
                  >
                    Filter By Type
                  </label>
                  <input
                    type="text"
                    className="py-2 border border-gray-300 outline-0 indent-3 rounded-md focus:border-primaryColor"
                  />
                </div>
                <div className=" flex justify-end gap-4">
                  <button className="text-primaryColor px-4 py-2 rounded ">
                    Cancel
                  </button>
                  <button className=" text-white px-4 rounded py-2 bg-primaryColor flex items-center gap-1">
                    Filter
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </details>
          </div>
        </aside>
        <div className=" lg:col-span-7 max-md:col-span-10 max-sm:mt-10">
          <div className=" flex items-center justify-between mb-6 max-sm:px-0 lg:mx-0 md:mx-8 md:mt-4 lg:mt-0">
            <span className="">5 results</span>
            <div className="flex items-center justify-center">
              <p className="mr-2 max-sm:text-sm">Sort Price By:</p>
              <select
                className="lg:py-2 py-1 bg-white border pl-1 lg:px-7 px-0 border-primaryColor rounded-lg outline-0 cursor-pointer text-sm hover:bg-none hover:text-black"
                name="None"
                id=""
              >
                <option value="" className=" bg-none">
                  None
                </option>
                <option value="" className="bg-none">
                  High to Low
                </option>
                <option value="" className="bg-none">
                  Low to High
                </option>
              </select>
            </div>
          </div>

          <div className=" flex flex-col gap-8">
            <div className="grid grid-cols-8 border gap-6 px-8 py-6 rounded-lg ">
              <div className=" col-span-3 max-sm:col-span-8 max-sm:mb-4">
                <div className="relative h-full w-full">
                  <img
                    src={require("./components/poonhill.jpg")}
                    alt=""
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                    Likely to sell out
                  </p>
                </div>
              </div>
              <div className=" col-span-4 max-sm:col-span-6">
                <h1 className=" font-bold mb-2 text-lg">
                  Poonhill and Ghandruk trekking
                </h1>
                <p className=" text-sm line-clamp-3 mb-7 text-gray-800">
                  A trek to Poon Hill is a popular trekking destination in the
                  Annapurna region of Nepal, offering breathtaking views of the
                  Himalayas, including Annapurna and Dhaulagiri ranges. The trek
                  usually starts and ends in Nayapul, and it takes about 4 to 5
                  days to complete. Here's a general itinerary for a Poon Hill
                  trek:
                </p>
                <div>
                  <span className="flex flex-col gap-2">
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      15 Views
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                      30 seats
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800 lg:pb-10 pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                      trekking
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-span-1 max-sm:col-span-2 flex flex-col items-end">
                <p className="text-[12px]">from</p>
                <p className="font-bold">NRS.20</p>
              </div>
            </div>

            <div className="grid grid-cols-8 border gap-6 px-8 py-6 rounded-lg ">
              <div className=" col-span-3 max-sm:col-span-8 max-sm:mb-4">
                <div className="relative h-full w-full">
                  <img
                    src={require("./components/poonhill.jpg")}
                    alt=""
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                    Likely to sell out
                  </p>
                </div>
              </div>
              <div className=" col-span-4 max-sm:col-span-6">
                <h1 className=" font-bold mb-2 text-lg">
                  Poonhill and Ghandruk trekking
                </h1>
                <p className=" text-sm line-clamp-3 mb-7 text-gray-800">
                  A trek to Poon Hill is a popular trekking destination in the
                  Annapurna region of Nepal, offering breathtaking views of the
                  Himalayas, including Annapurna and Dhaulagiri ranges. The trek
                  usually starts and ends in Nayapul, and it takes about 4 to 5
                  days to complete. Here's a general itinerary for a Poon Hill
                  trek:
                </p>
                <div>
                  <span className="flex flex-col gap-2">
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      15 Views
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                      30 seats
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800 lg:pb-10 pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                      trekking
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-span-1 max-sm:col-span-2 flex flex-col items-end">
                <p className="text-[12px]">from</p>
                <p className="font-bold">NRS.20</p>
              </div>
            </div>

            <div className="grid grid-cols-8 border gap-6 px-8 py-6 rounded-lg ">
              <div className=" col-span-3 max-sm:col-span-8 max-sm:mb-4">
                <div className="relative h-full w-full">
                  <img
                    src={require("./components/poonhill.jpg")}
                    alt=""
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                    Likely to sell out
                  </p>
                </div>
              </div>
              <div className=" col-span-4 max-sm:col-span-6">
                <h1 className=" font-bold mb-2 text-lg">
                  Poonhill and Ghandruk trekking
                </h1>
                <p className=" text-sm line-clamp-3 mb-7 text-gray-800">
                  A trek to Poon Hill is a popular trekking destination in the
                  Annapurna region of Nepal, offering breathtaking views of the
                  Himalayas, including Annapurna and Dhaulagiri ranges. The trek
                  usually starts and ends in Nayapul, and it takes about 4 to 5
                  days to complete. Here's a general itinerary for a Poon Hill
                  trek:
                </p>
                <div>
                  <span className="flex flex-col gap-2">
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      15 Views
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                      30 seats
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800 lg:pb-10 pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                      trekking
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-span-1 max-sm:col-span-2 flex flex-col items-end">
                <p className="text-[12px]">from</p>
                <p className="font-bold">NRS.20</p>
              </div>
            </div>

            <div className="grid grid-cols-8 border gap-6 px-8 py-6 rounded-lg ">
              <div className=" col-span-3 max-sm:col-span-8 max-sm:mb-4">
                <div className="relative h-full w-full">
                  <img
                    src={require("./components/poonhill.jpg")}
                    alt=""
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                    Likely to sell out
                  </p>
                </div>
              </div>
              <div className=" col-span-4 max-sm:col-span-6">
                <h1 className=" font-bold mb-2 text-lg">
                  Poonhill and Ghandruk trekking
                </h1>
                <p className=" text-sm line-clamp-3 mb-7 text-gray-800">
                  A trek to Poon Hill is a popular trekking destination in the
                  Annapurna region of Nepal, offering breathtaking views of the
                  Himalayas, including Annapurna and Dhaulagiri ranges. The trek
                  usually starts and ends in Nayapul, and it takes about 4 to 5
                  days to complete. Here's a general itinerary for a Poon Hill
                  trek:
                </p>
                <div>
                  <span className="flex flex-col gap-2">
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      15 Views
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                      30 seats
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800 lg:pb-10 pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                      trekking
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-span-1 max-sm:col-span-2 flex flex-col items-end">
                <p className="text-[12px]">from</p>
                <p className="font-bold">NRS.20</p>
              </div>
            </div>

            <div className="grid grid-cols-8 border gap-6 px-8 py-6 rounded-lg ">
              <div className=" col-span-3 max-sm:col-span-8 max-sm:mb-4">
                <div className="relative h-full w-full">
                  <img
                    src={require("./components/poonhill.jpg")}
                    alt=""
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                    Likely to sell out
                  </p>
                </div>
              </div>
              <div className=" col-span-4 max-sm:col-span-6">
                <h1 className=" font-bold mb-2 text-lg">
                  Poonhill and Ghandruk trekking
                </h1>
                <p className=" text-sm line-clamp-3 mb-7 text-gray-800">
                  A trek to Poon Hill is a popular trekking destination in the
                  Annapurna region of Nepal, offering breathtaking views of the
                  Himalayas, including Annapurna and Dhaulagiri ranges. The trek
                  usually starts and ends in Nayapul, and it takes about 4 to 5
                  days to complete. Here's a general itinerary for a Poon Hill
                  trek:
                </p>
                <div>
                  <span className="flex flex-col gap-2">
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      15 Views
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                      30 seats
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-800 lg:pb-10 pb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 6h.008v.008H6V6z"
                        />
                      </svg>
                      trekking
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-span-1 max-sm:col-span-2 flex flex-col items-end">
                <p className="text-[12px]">from</p>
                <p className="font-bold">NRS.20</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
