import React, {useEffect, useState} from "react";
import {data} from "./EmployeeData";
import Employee from "./Employee";
import Header from "./Header";

function Content() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || data
  );
  const [selectedTeam, setSelectedTeam] = useState(
    JSON.parse(localStorage.getItem("teamMemberList")) || "TeamA"
  );

  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  const handleEmployeeCardClick = (e) => {
    const cardId = parseInt(e.currentTarget.id);
    setEmployees(
      employees.map((employee) =>
        employee.id === cardId
          ? employee.teamName === selectedTeam
            ? {...employee, teamName: ""}
            : {...employee, teamName: selectedTeam}
          : employee
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("teamMemberList", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <>
      <Header
        handleTeamChange={handleTeamChange}
        selectedTeam={selectedTeam}
        teamMember={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <div className="my-10 container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <Employee
            employee={employee}
            handleEmployeeCardClick={handleEmployeeCardClick}
            selectedTeam={selectedTeam}
          />
        ))}
      </div>
    </>
  );
}

export default Content;
