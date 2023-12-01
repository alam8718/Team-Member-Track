import React from "react";

function Navbar() {
  return (
    <>
      <div className="mb-12">
        <nav className="bg-gray-200">
          <ul className="flex justify-center gap-40 ">
            <a href="#" className="px-4 py-1 bg-amber-400 rounded-md my-2">
              <li>Home</li>
            </a>
            <a href="#" className="px-4 py-1 bg-amber-400 rounded-md my-2">
              <li>Teams</li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
