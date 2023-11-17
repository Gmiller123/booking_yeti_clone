import React from "react";
import heroImg from "./hero-section-bg.webp";

const Main = () => {
  return (
    <main>
      <div className="h-[400px] md:h-[600px] relative">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <img src="" alt="" />
        <div className="  w-full absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 md:w-auto sm:w-max sm:px-4">
          <h1 className=" lg:text-4xl text-3xl mb-2 font-black text-white text-center">
            Do more with Booking Yeti.
          </h1>
          <p className="text-center mb-6 text-white">
            On site, 300,000+ experiences you'll remember.
          </p>
          <form
            action=""
            className=" flex bg-white items-center p-1 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 ml-2 text-gray-500 mb-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <input
              className=" outline-none flex-1 py-3 indent-2 text-sm"
              type="text"
              placeholder="Search place..."
            />
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10 bg-primaryColor text-white rounded-lg p-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
      {/*--------------------------- Why Book with Yeti-------------------------- */}
      <section className="my-20 max-w-[1400px] mx-auto sm:px-4">
        <div className="">
          <h1 className="text-center text-2xl font-extrabold mb-10">
            Why Book with Booking Yeti?
          </h1>

          <div className=" grid lg:grid-cols-3 sm:grid-cols-2 gap-6 whitespace-nowrap">
            <div className="flex items-center flex-col justify-end gap-y-2">
              <svg
                width="48"
                height="35"
                viewBox="0 0 48 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_61_42)">
                  <path
                    d="M44.0952 5.23202C52.7092 14.551 45.4792 16.177 37.7492 24.149C30.0192 32.12 24.6232 36.779 16.1032 34.1C7.5832 31.422 -5.3618 19.148 2.3682 11.177C10.0982 3.20502 35.4812 -4.08598 44.0952 5.23202Z"
                    fill="#FED141"
                  ></path>
                  <path
                    d="M7.7998 8.49802C7.7998 7.89002 8.2898 7.40002 8.8968 7.40002H40.3018C40.9078 7.40002 41.3998 7.89102 41.3998 8.49802V27.158C41.3998 27.764 40.9078 28.255 40.3018 28.255H8.8968C8.60577 28.2548 8.32675 28.139 8.12105 27.9331C7.91535 27.7272 7.7998 27.4481 7.7998 27.157V8.49702V8.49802Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.6658 9.26602V26.389H39.5338V9.26602H9.6658ZM8.8968 7.40002C8.2908 7.40002 7.7998 7.89002 7.7998 8.49802V27.158C7.7998 27.764 8.2908 28.255 8.8968 28.255H40.3018C40.9078 28.255 41.3998 27.764 41.3998 27.157V8.49702C41.3998 7.89102 40.9078 7.40002 40.3018 7.40002H8.8968Z"
                    fill="#2A2D32"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.0758 11.187C27.8256 11.195 27.5884 11.3001 27.4143 11.4799C27.2402 11.6597 27.1428 11.9002 27.1428 12.1505C27.1428 12.4008 27.2402 12.6412 27.4143 12.8211C27.5884 13.0009 27.8256 13.1059 28.0758 13.114H32.0958C32.1218 13.884 32.3408 14.523 32.8358 14.967C33.3388 15.417 34.0558 15.605 34.9338 15.617V20.004C34.0558 20.016 33.3388 20.204 32.8358 20.654C32.3408 21.099 32.1218 21.737 32.0958 22.508H28.1498C27.8996 22.516 27.6624 22.6211 27.4883 22.8009C27.3142 22.9807 27.2168 23.2212 27.2168 23.4715C27.2168 23.7218 27.3142 23.9622 27.4883 24.1421C27.6624 24.3219 27.8996 24.4269 28.1498 24.435H32.1968C33.2718 24.435 34.0198 23.662 34.0198 22.668C34.0198 22.221 34.0908 22.112 34.1468 22.067C34.2221 22.0151 34.309 21.9825 34.3998 21.972C34.5498 21.944 34.7518 21.93 35.0298 21.93C36.0398 21.93 36.8608 21.134 36.8608 20.058V15.564C36.8608 14.488 36.0408 13.691 35.0288 13.691C34.7508 13.691 34.5488 13.677 34.3988 13.649C34.3083 13.6382 34.2218 13.6056 34.1468 13.554C34.0908 13.509 34.0198 13.401 34.0198 12.954C34.0198 11.959 33.2718 11.186 32.1968 11.186H28.0768L28.0758 11.187ZM20.8348 24.434C21.085 24.4259 21.3222 24.3209 21.4963 24.1411C21.6704 23.9612 21.7678 23.7208 21.7678 23.4705C21.7678 23.2202 21.6704 22.9797 21.4963 22.7999C21.3222 22.6201 21.085 22.515 20.8348 22.507H16.8148C16.7888 21.737 16.5708 21.098 16.0748 20.654C15.5728 20.204 14.8548 20.016 13.9768 20.004V15.617C14.8548 15.605 15.5728 15.417 16.0748 14.967C16.5708 14.522 16.7898 13.884 16.8148 13.113H20.7618C21.012 13.1049 21.2492 12.9999 21.4233 12.8201C21.5974 12.6402 21.6948 12.3998 21.6948 12.1495C21.6948 11.8992 21.5974 11.6587 21.4233 11.4789C21.2492 11.2991 21.012 11.194 20.7618 11.186H16.7148C15.6398 11.186 14.8908 11.959 14.8908 12.953C14.8908 13.4 14.8208 13.509 14.7648 13.553C14.6896 13.6052 14.6027 13.6381 14.5118 13.649C14.3618 13.677 14.1598 13.691 13.8818 13.691C12.8718 13.691 12.0498 14.487 12.0498 15.563V20.057C12.0498 21.133 12.8708 21.93 13.8818 21.93C14.1598 21.93 14.3618 21.943 14.5118 21.972C14.6026 21.9825 14.6895 22.0151 14.7648 22.067C14.8198 22.112 14.8908 22.22 14.8908 22.667C14.8908 23.662 15.6388 24.434 16.7148 24.434H20.8348Z"
                    fill="#2A2D32"
                  ></path>
                  <path
                    d="M28.6559 17.828C28.6559 20.388 26.8399 22.462 24.6009 22.462C22.3609 22.462 20.5449 20.387 20.5449 17.828C20.5449 15.268 22.3609 13.193 24.6009 13.193C26.8409 13.193 28.6559 15.268 28.6559 17.828Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.5999 20.816C25.7309 20.816 27.0099 19.692 27.0099 17.828C27.0099 15.964 25.7309 14.84 24.5999 14.84C23.4699 14.84 22.1919 15.964 22.1919 17.828C22.1919 19.692 23.4689 20.816 24.5999 20.816ZM24.5999 22.462C26.8399 22.462 28.6559 20.387 28.6559 17.828C28.6559 15.268 26.8399 13.193 24.6009 13.193C22.3609 13.193 20.5449 15.268 20.5449 17.828C20.5449 20.388 22.3599 22.462 24.5999 22.462Z"
                    fill="#2A2D32"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_61_42">
                    <rect width="48" height="35" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <h3 className="font-semibold">Free Cancellation</h3>
              <p>Stay Flexible on your trip.</p>
            </div>
            <div className="flex items-center flex-col justify-end gap-y-2">
              <svg
                width="49"
                height="36"
                viewBox="0 0 49 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_61_34)">
                  <path
                    d="M44.7202 6.37203C53.3342 15.69 46.1042 17.317 38.3742 25.288C30.6442 33.26 25.2482 37.918 16.7282 35.24C8.2082 32.561 -4.7368 20.288 2.9932 12.316C10.7232 4.34503 36.1062 -2.94697 44.7202 6.37203Z"
                    fill="#D3F6EE"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.625 18.7C31.801 17.646 35.625 13.927 35.625 9.5C35.625 4.253 30.252 0 23.625 0C16.998 0 11.625 4.253 11.625 9.5C11.625 13.636 14.965 17.155 19.625 18.46V29H26.625V18.7Z"
                    fill="white"
                  ></path>
                  <path
                    d="M20.685 31.154C20.0828 31.1532 19.5054 30.9135 19.0797 30.4876C18.6539 30.0617 18.4145 29.4842 18.414 28.882V25.312H17.44C17.1872 25.3039 16.9475 25.1978 16.7715 25.0161C16.5956 24.8344 16.4972 24.5914 16.4972 24.3385C16.4972 24.0856 16.5956 23.8426 16.7715 23.6609C16.9475 23.4792 17.1872 23.3731 17.44 23.365H18.942L17.78 20.351C13.426 18.566 10.625 14.803 10.625 10.709C10.625 4.804 16.303 0 23.281 0C30.26 0 35.938 4.804 35.938 10.71C35.938 14.803 33.138 18.566 28.782 20.351L27.621 23.365H29.123C29.3813 23.365 29.6291 23.4676 29.8117 23.6503C29.9944 23.8329 30.097 24.0807 30.097 24.339C30.097 24.5973 29.9944 24.8451 29.8117 25.0277C29.6291 25.2104 29.3813 25.313 29.123 25.313H28.149V28.883C28.1479 29.4851 27.9082 30.0621 27.4823 30.4877C27.0563 30.9132 26.4791 31.1525 25.877 31.153L20.685 31.154ZM20.361 28.882C20.361 29.062 20.506 29.207 20.685 29.207H25.877C26.057 29.207 26.202 29.061 26.202 28.882V25.312H20.36L20.361 28.882ZM25.533 23.365L26.413 21.083C25.384 21.3066 24.334 21.4189 23.281 21.418C22.222 21.418 21.171 21.307 20.149 21.083L21.029 23.365H25.533ZM23.281 1.947C20.642 1.947 18.414 5.959 18.414 10.709C18.414 15.459 20.642 19.471 23.281 19.471C25.921 19.471 28.149 15.459 28.149 10.709C28.149 5.959 25.92 1.947 23.281 1.947ZM18.678 2.804C15.014 4.242 12.572 7.321 12.572 10.709C12.572 14.097 15.014 17.176 18.678 18.614C17.289 16.609 16.466 13.737 16.466 10.709C16.466 7.681 17.289 4.809 18.678 2.804ZM27.884 2.804C29.274 4.809 30.096 7.681 30.096 10.709C30.096 13.738 29.273 16.609 27.884 18.614C31.549 17.176 33.99 14.097 33.99 10.709C33.99 7.321 31.549 4.242 27.884 2.804Z"
                    fill="#2A2D32"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_61_34">
                    <rect width="49" height="36" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <h3 className="font-semibold">300,000+ experiences</h3>
              <p>Make memories around the world.</p>
            </div>
            <div className="flex items-center flex-col justify-end gap-y-2">
              <svg
                width="48"
                height="48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="advantageBannerIcon__2LXU"
              >
                <path
                  d="M44.095 12.232c8.614 9.319 1.384 10.945-6.346 18.917-7.73 7.971-13.126 12.63-21.646 9.951-8.52-2.678-21.465-14.952-13.735-22.923 7.73-7.972 33.113-15.263 41.727-5.945z"
                  fill="#F6ECBB"
                ></path>
                <path
                  d="M25.082 7.39l3.27 6.933a2.34 2.34 0 001.752 1.328l.008.002 7.297 1.109a.745.745 0 01.376 1.252l-.002.002-5.294 5.398-.004.004a2.447 2.447 0 00-.654 2.104v.001l1.25 7.62.001.01.002.01a.708.708 0 01-.66.837.597.597 0 01-.275-.076l-.006-.003-6.541-3.598H25.6a2.275 2.275 0 00-2.202 0l-6.541 3.598-.006.003a.597.597 0 01-.276.076.707.707 0 01-.66-.837l.003-.01.001-.01 1.25-7.62v-.001a2.447 2.447 0 00-.654-2.104l-.005-.004-5.294-5.398-.001-.002a.745.745 0 01.376-1.252l7.297-1.11h.008a2.34 2.34 0 001.752-1.33l3.27-6.931.004-.008.003-.008A.633.633 0 0124.5 7a.633.633 0 01.575.375l.003.008.004.008z"
                  fill="#fff"
                  stroke="#2A2D32"
                  stroke-width="2"
                ></path>
              </svg>
              <h3 className="font-semibold">Trusted reviews</h3>
              <p>4.3 stars from 140,000+ Trustpilot reviews</p>
            </div>
          </div>
        </div>
      </section>
      <fieldset class="my-10 border-t border-slate-300 sm:my-20"></fieldset>
      {/* --------------------------- Popular Destination-------------------------- */}
      <section className=" max-w-[1400px] mx-auto sm:px-4 md:px-4 lg:px-8 px-4">
        <h1 className=" text-2xl font-bold text-center mb-10">
          Popular Destinations
        </h1>
        <div className="popular_destination_img_container">
          <div className="grid sm:grid-flow-row lg:grid-cols-4 md:grid-cols-2 gap-4 pb-16">
            <a href="" className="">
              <img src={require("./kathmandu.webp")} alt="Kathmandu" />
              <div className="caption_heading">
                <h1 className="">Kathmandu</h1>
              </div>
            </a>

            <a href="">
              <img src={require("./bhaktapur.webp")} alt="bhaktapur" />
              <div className="caption_heading">
                <h1>bhaktapur</h1>
              </div>
            </a>
            <a href="">
              <img
                className=""
                src={require("./lalitpur.webp")}
                alt="lalitpur"
              />
              <div className="caption_heading">
                <h1>lalitpur</h1>
              </div>
            </a>
            <a href="">
              <img
                className=" object-cover h-full"
                src={require("./pokhara.jpeg")}
                alt="pokhara"
              />
              <div className="caption_heading">
                <h1>pokhara</h1>
              </div>
            </a>
            <a href="">
              <img src={require("./lalitpur.webp")} alt="Kathmandu" />
              <div className="caption_heading">
                <h1>Kathmandu</h1>
              </div>
            </a>
            <a href="">
              <img src={require("./pokhara.jpeg")} alt="Kathmandu" />
              <div className="caption_heading">
                <h1>Kathmandu</h1>
              </div>
            </a>
            <a href="">
              <img src={require("./bhaktapur.webp")} alt="Kathmandu" />
              <div className="caption_heading">
                <h1>Kathmandu</h1>
              </div>
            </a>
            <a href="">
              <img src={require("./kathmandu.webp")} alt="Kathmandu" />
              <div className="caption_heading">
                <h1>Kathmandu</h1>
              </div>
            </a>
            <a href="">
              <img src={require("./bhaktapur.webp")} alt="Kathmandu" />
              <div className="caption_heading">
                <h1>Kathmandu</h1>
              </div>
            </a>
            <a href="">
              <img src={require("./kathmandu.webp")} alt="Kathmandu" />
              <div className="caption_heading">
                <h1>Kathmandu</h1>
              </div>
            </a>
            <a href="">
              <img src={require("./lalitpur.webp")} alt="Kathmandu" />
              <div className="caption_heading">
                <h1>Kathmandu</h1>
              </div>
            </a>
            <a href="">
              <img
                src={require("./pokhara.jpeg")}
                alt="Kathmandu"
                className=""
              />
              <div className="caption_heading">
                <h1>Kathmandu</h1>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* -----------------------------------Horizons sections----------------------------------- */}
      <section className=" bg-indigo-50 my-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center lg:justify-between py-16 px-4">
          <div className="lg:max-w-[45%] leading-relaxed">
            <h1 className=" text-3xl font-[900] mb-4 text-center lg:text-start lg:text-4xl">
              Embrace Boundless Horizons
            </h1>
            <p className="text-[#404040] text-center lg:text-start">
              Discover the world at your pace with us. "Embrace Boundless
              Horizons" signifies our commitment to flexible and tailored travel
              experiences, where your journey is as unique as you are.
            </p>
          </div>
          <div className="lg:w-[450px] h-60 lg:block hidden">
            <img
              className=" object-cover w-full h-full rounded-lg"
              src={require("./banner_image_1.webp")}
              alt="Man in a trekking in himalayas"
            />
          </div>
        </div>
      </section>
      {/* --------------------------- Popular Activities --------------------------- */}
      <section>
        <div className=" max-w-[1400px] mx-auto px-4 lg:pt-16 pt-10 lg:pb-24 pb-10">
          <h1 className=" text-3xl font-[900] text-center mb-16">
            Popular Activities
          </h1>

          <div className="popular_activities_container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
            <a href="" className="flex items-center gap-4 h-24">
              <img
                className="w-28 h-full object-cover rounded-lg"
                src={require("./poonhill.webp")}
                alt=""
              />
              <div className="clamp_container flex flex-col">
                <h1 className=" ">Poonhill and Ghandruk trekking</h1>
                <p>11 Tours and Activities</p>
              </div>
            </a>
            <a href="" className="flex items-center gap-4 h-24">
              <img
                className="w-28 h-full object-cover rounded-lg"
                src={require("./paraglidng.webp")}
                alt=""
              />
              <div className="clamp_container flex flex-col">
                <h1>Paragliding in Pokhara</h1>
                <p>9 Tours and Activities</p>
              </div>
            </a>
            <a href="" className="flex items-center gap-4 h-24">
              <img
                className="w-28 h-full object-cover rounded-lg"
                src={require("./1697452175656_64b12aba99_ebc1.webp")}
                alt=""
              />
              <div className="clamp_container flex flex-col">
                <h1>Trekking to ABC</h1>
                <p>5 Tours and Activites</p>
              </div>
            </a>
            <a href="" className="flex items-center gap-4 h-24">
              <img
                className="w-28 h-full object-cover rounded-lg"
                src={require("./snow.webp")}
                alt=""
              />
              <div className="clamp_container flex flex-col">
                <h1>Everest Base camp Trek</h1>
                <p>3 Tours and Activities</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <fieldset class="my-10 border-t border-slate-300 sm:my-20"></fieldset>
      {/* ------------------------ Popular Among travellers------------------------ */}
      <section className=" max-w-[1400px] mx-auto lg:pb-10">
        <h1 className=" text-center font-[900] text-[1.7rem] mb-10">
          Popular Among Travellers
        </h1>
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-4 place-items-center">
          <div className="flex flex-col">
            <div className="relative ">
              <img
                src={require("./poon1.webp")}
                alt=""
                className="rounded-lg w-30 h-full object-cover"
              />
              <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                Likely to sell out
              </p>
            </div>
            <h3 className="flex gap-3 text-gray-700 my-6 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400"
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
              Hiking
            </h3>
            <p className="mb-2 text-lg font-semibold">
              Poonhill and Ghandruk trekking
            </p>
            <h2 className=" font-bold">NRS. 5500</h2>
          </div>
          <div className="flex flex-col">
            <div className=" relative">
              <img
                src={require("./poon1.webp")}
                alt=""
                className="rounded-lg w-30 h-full object-cover"
              />
              <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                Likely to sell out
              </p>
            </div>
            <h3 className="flex gap-3 text-gray-700 my-6 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400"
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
              Hiking
            </h3>
            <p className="mb-2 text-lg font-semibold">
              Poonhill and Ghandruk trekking
            </p>
            <h2 className=" font-bold">NRS. 5500</h2>
          </div>
          <div className="flex flex-col">
            <div className=" relative">
              <img
                src={require("./poon1.webp")}
                alt=""
                className="rounded-lg w-30 h-full object-cover"
                v
              />
              <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                Likely to sell out
              </p>
            </div>
            <h3 className="flex gap-3 text-gray-700 my-6 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400"
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
              Hiking
            </h3>
            <p className="mb-2 text-lg font-semibold">
              Poonhill and Ghandruk trekking
            </p>
            <h2 className=" font-bold">NRS. 5500</h2>
          </div>
          <div className="flex flex-col">
            <div className=" relative">
              <img
                src={require("./poon1.webp")}
                alt=""
                className="rounded-lg w-30 h-full object-cover"
              />
              <p className=" absolute top-3 left-3 text-white bg-red-600 px-2 py-1 font-bold rounded-md">
                Likely to sell out
              </p>
            </div>
            <h3 className="flex gap-3 text-gray-700 my-6 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-400"
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
              Hiking
            </h3>
            <p className="mb-2 text-lg font-semibold">
              Poonhill and Ghandruk trekking
            </p>
            <h2 className=" font-bold">NRS. 5500</h2>
          </div>
        </div>
      </section>
      <section className=" bg-indigo-50 my-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center lg:justify-between py-16 px-4">
          <div className="lg:max-w-[45%] leading-relaxed">
            <h1 className=" text-3xl font-[900] mb-4 text-center lg:text-start lg:text-4xl">
              Free cancellation
            </h1>
            <p className="text-[#404040] text-center lg:text-start">
              You'll receive a full refund if you cancel at least 24 hours in
              advance of most experiences.
            </p>
          </div>
          <div className="lg:w-[450px] h-60 lg:block hidden">
            <img
              className=" object-cover w-full h-full rounded-lg"
              src={require("./banner.webp")}
              alt="Man in a trekking in himalayas"
            />
          </div>
        </div>
      </section>
      <section className=" my-10 max-w-[1400px] mx-auto sm:px-4">
        <div>
          <h1 className=" text-center font-black text-3xl mb-10">
            Famous Attractions
          </h1>
          <div className=" grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8 pb-20">
            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10  hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>

            <a
              href=""
              className=" border-2 border-gray-200 rounded-lg pb-10 hover:shadow min-w-[164px]"
            >
              <img
                className="h-32 w-full object-cover rounded-t-lg"
                src={require("./himalaya.webp")}
                alt=""
              />
              <div className="p-4">
                <h1 className=" font-bold text-lg">Dhandruk Village</h1>
                <p>Pokhara</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
