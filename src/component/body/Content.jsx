import React, {useState} from "react";
import {data, male, female} from "./EmployeeData";
import Employee from "./Employee";
function Content() {
  const [employees, setEmployees] = useState(data);
  const [selectedTeam, setSelectedTeam] = useState("TeamA");

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
  return (
    <>
      <div className="flex justify-center my-10 ">
        <select
          name="teams name"
          className="px-8 py-2 bg-gray-200 rounded-lg "
          onChange={handleTeamChange}
          value={selectedTeam}>
          <option value="TeamA">Team A</option>
          <option value="TeamB">Team B</option>
          <option value="TeamC">Team C</option>
          <option value="TeamD">Team D</option>
        </select>
      </div>
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
