import React from "react";

const ShowPlayer = (props) => {
  const addPlayerInfo = props.addPlayerInfo;
  console.log(addPlayerInfo);

  let i = 0;
  let initSalary = 0;
  for (i; i < addPlayerInfo.length; i++) {
    let player = addPlayerInfo[i];
    initSalary = initSalary + player.salary;
  }
  return (
    <div>
      <h4>Total Salary={initSalary}</h4>
    </div>
  );
};

export default ShowPlayer;
