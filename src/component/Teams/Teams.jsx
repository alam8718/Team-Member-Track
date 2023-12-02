import React, {useEffect, useState} from "react";
import TeamCard from "./TeamCard";

function Teams() {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || data
  );

  const teamA = employees.filter((employee) => employee.teamName === "TeamA");
  const teamB = employees.filter((employee) => employee.teamName === "TeamB");
  const teamC = employees.filter((employee) => employee.teamName === "TeamC");
  const teamD = employees.filter((employee) => employee.teamName === "TeamD");

  const teams = [
    {
      team: teamA,
      teamname: "Team A",
    },
    {
      team: teamB,
      teamname: "Team B",
    },
    {
      team: teamC,
      teamname: "Team C",
    },
    {
      team: teamD,
      teamname: "Team D",
    },
  ];
  useEffect(() => {}, []);

  return (
    <>
      <div className="flex  my-20">
        <div className=" container mx-auto">
          {teams.map((team) => (
            <div className=" my-10 flex flex-col items-center">
              <TeamCard team={team.team} teamName={team.teamname} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Teams;
