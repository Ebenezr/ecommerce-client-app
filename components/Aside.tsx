import React from "react";

const Aside = () => {
  return (
    <div className="hidden lg:block p-4 border-r-[1px] border-r-gray-300  ">
      <div>
        <p className="text-gray-500 font-semibold">Category</p>
        <span className="mt-3 flex items-center gap-3  py-2 px-2 rounded">
          <input type="checkbox" id="phone" className=" " />
          <label htmlFor="phone" className="text-gray-600">
            Phone
          </label>
        </span>
        <span className="mt-3 flex items-center gap-3  py-2 px-2 rounded">
          <input type="checkbox" id="laptop" className=" " />
          <label htmlFor="laptop" className="text-gray-600">
            Laptop
          </label>
        </span>
        <span className="mt-3 flex items-center gap-3  py-2 px-2 rounded">
          <input type="checkbox" id="Edibleoils" className=" " />
          <label htmlFor="Edibleoils" className="text-gray-600">
            Edible Oils
          </label>
        </span>
      </div>
    </div>
  );
};

export default Aside;
