import React from "react";
const TableItem = (props) => {
  const { winPlace, name, hit, rateOfFire } = props.player;
  return (
    <>
      <tr>
        <td>{props.idx + 1}</td>
        <td>{winPlace}</td>
        <td>{name}</td>
        <td>{hit}</td>
        <td>{rateOfFire} sec</td>
      </tr>
    </>
  );
};

export default TableItem;
