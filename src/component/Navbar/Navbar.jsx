import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="mb-20">
        <nav className="bg-gray-200 h-14 fixed inset-0">
          <ul className="flex justify-center items-center  gap-40 h-14  ">
            <li className=" px-4 py-1 bg-amber-400  rounded-md my-2  hover:bg-amber-500 duration-300 font-semibold ">
              <NavLink
                to={"/"}
                className={({isActive}) =>
                  ` pb-3   ${isActive ? "border-b-2   border-red-500 " : ""} `
                }>
                Home
              </NavLink>
            </li>
            <li className="px-4 py-1 bg-amber-400  rounded-md my-2  hover:bg-amber-500 duration-300 font-semibold ">
              <NavLink
                to={"/teams"}
                className={({isActive}) =>
                  ` pb-3   ${isActive ? "border-b-2   border-red-500 " : ""} `
                }>
                Teams
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
