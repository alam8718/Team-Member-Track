import React, { useState } from "react";

function TeamCard({team, teamName}) {
  const [show, setShow] = useState(false);

  const handleShow = ()=>{
    setShow(!show);
  }

  return (
    <>
      <button onClick={handleShow}  className="w-full bg-purple-400 rounded-md text-3xl text-center mb-10">
        {teamName}
      </button>
      <div className={`grid grid-cols-2 gap-10 place-items-center my-5 duration-500 transition-all ${show ? " opacity-0 h-0 " : "opacity-100 h-auto"}  `}>
        {team.map((employee) => (
          <>
            <div className=" ">
              <div className="w-72">
                <p className="text-xl ">Full Name: {employee.fullName}</p>
                <p className="text-lg">Designation: {employee.designation}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default TeamCard;
