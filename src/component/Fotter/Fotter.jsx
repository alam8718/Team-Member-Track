import React from "react";

function Fotter() {
  let date = new Date();
  return (
    <>
      <div className="flex justify-center my-7 ">
        <h1 className="text-xl text-gray-500">
          Team Member Track APP - {date.getFullYear()}
        </h1>
      </div>
    </>
  );
}

export default Fotter;
