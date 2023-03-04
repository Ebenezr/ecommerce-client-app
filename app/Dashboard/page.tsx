import React from "react";

const Dashboard = () => {
  return (
    <section className=" col-start-2 col-end-7 p-4">
      <div className="h-32 hidden lg:block md:block ">
        <div className="grid grid-cols-5 grid-rows-3 gap-3 h-full">
          {/* info */}
          <div className="rounded-lg p-2 flex flex-col bg-white shadow-sm h-full col-end-2 row-end-4 row-start-1">
            <div className="rounded-lg bg-blue-100 h-1/2 w-full"></div>
            <div className="p-2 flex items-center justify-between gap-2">
              <p className="font-bold text-gray-500 md:text-sm">ESOKO INC</p>
              <p className="text-green-500 md:text-xs">Online</p>
            </div>
          </div>
          {/* starts */}
          <div className="rounded-lg flex bg-white shadow-sm p-2 h-full col-start-2 col-end-5 row-end-3 row-start-1">
            <div className="flex flex-col w-1/2">
              <p className="text-gray-500 font-semibold">Product Categories</p>
              <p className="text-gray-500 font-semibold">Products</p>
            </div>
            <div className="flex flex-col w-1/2">
              <p className="text-gray-500 font-semibold">Total Stock</p>
              <p className="text-gray-500 font-semibold">Products</p>
            </div>
          </div>
          <div className="rounded-lg flex justify-around items-center gap-3 px-2 bg-white shadow-sm h-full col-end-6 col-start-2 row-start-3 row-end-4">
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500 md:w-4 md:h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="text-gray-500 md:text-xs"> +254 754 854585</p>
            </span>
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 md:w-4 md:h-4 text-gray-500"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <p className="text-gray-500 md:text-xs">esoko@info.com</p>
            </span>
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 md:w-4 md:h-4 text-gray-500"
              >
                <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
              </svg>

              <p className="text-gray-500 md:text-xs">www.esoko.co.ke</p>
            </span>
            <span className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500 md:w-4 md:h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 00-.266.112L8.78 21.53A.75.75 0 017.5 21v-3.955a48.842 48.842 0 01-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="text-gray-500 md:text-xs">+254 754 545554</p>
            </span>
          </div>
          {/* cta */}
          <div className="rounded-lg bg-white shadow-sm h-full col-end-6 col-start-5 overflow-hidden row-start-1 row-end-3">
            <button className="bg-blue-100 text-blue-500 font-semibold md:text-sm w-full h-full flex items-center gap-3 md:gap-2 justify-center hover:bg-blue-500 hover:text-white group px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-blue-500 w-6 h-6 group-hover:text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clip-rule="evenodd"
                />
              </svg>
              ADD NEW PRODUCT
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        {/* header */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 py-2 border-b-[1px] border-b-gray-200 mt-3 overflow-x-scroll">
            <button className="bg-blue-500 text-xs text-white font-semibold whitespace-nowrap rounded-full  px-4 py-2 hover:bg-blue-500 hover:text-white group">
              All Products
            </button>
            <button className="bg-blue-100 text-blue-500  text-xs font-semibold whitespace-nowrap rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white group">
              Home care
            </button>
            <button className="bg-blue-100 text-blue-500  text-xs font-semibold whitespace-nowrap rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white group">
              Phones
            </button>
            <button className="bg-blue-100 text-blue-500  text-xs font-semibold whitespace-nowrap rounded-full px-4 py-2 hover:bg-blue-500 hover:text-white group">
              Vegetable Oil
            </button>
          </div>
        </div>
        {/* products */}
        <div className=" h-[40rem] overflow-hidden  ">
          <div className="overflow-x-scroll h-full w-full grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 p-4 gap-4">
            {/* card */}
            <div className="grid grid-rows-3 h-80 bg-slate-50 shadow-md rounded-lg overflow-hidden">
              {/* image */}
              <div className=" relative bg-white w-full row-end-3 row-start-1 ">
                {/* favorite */}
                <button className="p-2 absolute right-0 top-0">
                  {!true ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  )}
                </button>
                {/* discount */}
                <span className="h-12 w-10 rounded-lg bg-blue-500 p-2 absolute left-2 top-2">
                  <p className="text-white font-semibold text-xs">40% OFF</p>
                </span>
                {
                  <span className="flex gap-2 items-center p-2 absolute left-0 bottom-0 ">
                    <p className="text-gray-400 text-xs">Sponsored</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                }
              </div>
              {/* content */}
              <div className="px-4 flex flex-col">
                <p className="text-sm font-semibold text-gary-600 mt-2">
                  Iphone 15x
                </p>
                <p className="text-xs text-blue-500">Iphone inc</p>
                <p className="text-sm font-semibold mt-2 text-gary-600">
                  Ksh. 123, 000
                </p>
                <p className="text-xs text-yellow-400 mt-[2px]">&#9733; 5</p>
              </div>
              {/* buttons */}
              <div className="flex justify-between items-center gap-3 px-4 py-2">
                <button className="bg-green-200 text-green-500 text-sm rounded-md px-4 py-[4px] font-semibold">
                  Edit
                </button>
                <button className="bg-red-200 text-red-500 rounded-md  text-sm px-4 py-[4px]  font-semibold">
                  Delete
                </button>
              </div>
            </div>
            <div className="grid grid-rows-3 h-80 bg-slate-50 shadow-md rounded-lg overflow-hidden">
              {/* image */}
              <div className=" relative bg-white w-full row-end-3 row-start-1 ">
                {/* favorite */}
                <button className="p-2 absolute right-0 top-0">
                  {!true ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  )}
                </button>
                {/* discount */}
                <span className="h-12 w-10 rounded-lg bg-blue-500 p-2 absolute left-2 top-2">
                  <p className="text-white font-semibold text-xs">40% OFF</p>
                </span>
                {
                  <span className="flex gap-2 items-center p-2 absolute left-0 bottom-0 ">
                    <p className="text-gray-400 text-xs">Sponsored</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                }
              </div>
              {/* content */}
              <div className="px-4 flex flex-col">
                <p className="text-sm font-semibold text-gary-600 mt-2">
                  Iphone 15x
                </p>
                <p className="text-xs text-blue-500">Iphone inc</p>
                <p className="text-sm font-semibold mt-2 text-gary-600">
                  Ksh. 123, 000
                </p>
                <p className="text-xs text-yellow-400 mt-[2px]">&#9733; 5</p>
              </div>
              {/* buttons */}
              <div className="flex justify-between items-center  gap-3  px-4 py-2">
                <button className="bg-green-200 text-green-500 rounded-md px-4 py-[4px] font-semibold">
                  Edit
                </button>
                <button className="bg-red-200 text-red-500 rounded-md px-4 py-[4px]  font-semibold">
                  Delete
                </button>
              </div>
            </div>
            <div className="grid grid-rows-3 h-80 bg-slate-50 shadow-md rounded-lg overflow-hidden">
              {/* image */}
              <div className=" relative bg-white w-full row-end-3 row-start-1 ">
                {/* favorite */}
                <button className="p-2 absolute right-0 top-0">
                  {!true ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  )}
                </button>
                {/* discount */}
                <span className="h-12 w-10 rounded-lg bg-blue-500 p-2 absolute left-2 top-2">
                  <p className="text-white font-semibold text-xs">40% OFF</p>
                </span>
                {
                  <span className="flex gap-2 items-center p-2 absolute left-0 bottom-0 ">
                    <p className="text-gray-400 text-xs">Sponsored</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                }
              </div>
              {/* content */}
              <div className="px-4 flex flex-col">
                <p className="text-sm font-semibold text-gary-600 mt-2">
                  Iphone 15x
                </p>
                <p className="text-xs text-blue-500">Iphone inc</p>
                <p className="text-sm font-semibold mt-2 text-gary-600">
                  Ksh. 123, 000
                </p>
                <p className="text-xs text-yellow-400 mt-[2px]">&#9733; 5</p>
              </div>
              {/* buttons */}
              <div className="flex justify-between items-center  gap-3  px-4 py-2">
                <button className="bg-green-200 text-green-500 rounded-md px-4 py-[4px] font-semibold">
                  Edit
                </button>
                <button className="bg-red-200 text-red-500 rounded-md px-4 py-[4px]  font-semibold">
                  Delete
                </button>
              </div>
            </div>
            <div className="grid grid-rows-3 h-80 bg-slate-50 shadow-md rounded-lg overflow-hidden">
              {/* image */}
              <div className=" relative bg-white w-full row-end-3 row-start-1 ">
                {/* favorite */}
                <button className="p-2 absolute right-0 top-0">
                  {!true ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-gray-400"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  )}
                </button>
                {/* discount */}
                <span className="h-12 w-10 rounded-lg bg-blue-500 p-2 absolute left-2 top-2">
                  <p className="text-white font-semibold text-xs">40% OFF</p>
                </span>
                {
                  <span className="flex gap-2 items-center p-2 absolute left-0 bottom-0 ">
                    <p className="text-gray-400 text-xs">Sponsored</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                }
              </div>
              {/* content */}
              <div className="px-4 flex flex-col">
                <p className="text-sm font-semibold text-gary-600 mt-2">
                  Iphone 15x
                </p>
                <p className="text-xs text-blue-500">Iphone inc</p>
                <p className="text-sm font-semibold mt-2 text-gary-600">
                  Ksh. 123, 000
                </p>
                <p className="text-xs text-yellow-400 mt-[2px]">&#9733; 5</p>
              </div>
              {/* buttons */}
              <div className="flex justify-between items-center  gap-3  px-4 py-2">
                <button className="bg-green-200 text-green-500 rounded-md px-4 py-[4px] font-semibold">
                  Edit
                </button>
                <button className="bg-red-200 text-red-500 rounded-md px-4 py-[4px]  font-semibold">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
