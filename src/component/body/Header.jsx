import React from "react";

function Header({handleTeamChange, selectedTeam,teamMember}) {
  return (
    <>
      <div className="flex items-center gap-4  flex-col">
        <h1 className="text-3xl">Team Member Allocation</h1>
        <p className="text-2xl">{selectedTeam} has {teamMember} members</p>
      </div>
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
    </>
  );
}

export default Header;
