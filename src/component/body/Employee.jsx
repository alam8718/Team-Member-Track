import React from "react";
import {male, female} from "./EmployeeData";

function Employee({employee, handleEmployeeCardClick, selectedTeam}) {
  return (
    <>
      <div
        key={employee.id}
        onClick={handleEmployeeCardClick}
        id={employee.id}
        className={`outline-none ${
          employee.teamName === selectedTeam
            ? "ring-2 ring-green-500 rounded-md"
            : "ring-0"
        }`}>
        <div className="shadow-md cursor-pointer ">
          <div className="flex justify-center ">
            {employee.gender === "male" ? (
              <img src={male} alt="" />
            ) : (
              <img src={female} alt="" />
            )}
          </div>
          <div className="mx-10 pt-4">
            <p>ID: {employee.id}</p>
            <p>TEAM: {employee.teamName}</p>
            <p className="">Fullname: {employee.fullName}</p>
            <p className="">Designation: {employee.designation}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
