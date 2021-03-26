import React, { useEffect, useState } from "react";
import "./BiathlonTable.css";
import TableItem from "./TableItem";

const BiathlonTable = () => {
  const players = [
    { winPlace: 3, name: "Sveta", hit: 5, rateOfFire: 20 },
    { winPlace: 5, name: "Vasa", hit: 3, rateOfFire: 11 },
    { winPlace: 6, name: "Petia", hit: 2, rateOfFire: 12 },
    { winPlace: 2, name: "Katia", hit: 4, rateOfFire: 6 },
    { winPlace: 4, name: "Ania", hit: 4, rateOfFire: 15 },
    { winPlace: 1, name: "Roman", hit: 5, rateOfFire: 10 },
  ];

  const [statePlayers, setStatePlayers] = useState([]);
  const [stateSelected, setStateSelect] = useState("");

  useEffect(() => {
    setStatePlayers(players.sort((a, b) => a.winPlace - b.winPlace));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortTable = (value) => {
    switch (value) {
      case "win":
        setStatePlayers([
          ...statePlayers.sort((a, b) => a.winPlace - b.winPlace),
        ]);
        break;
      case "name":
        setStatePlayers([
          ...statePlayers.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
          ),
        ]);
        break;
      case "hit":
        setStatePlayers([...statePlayers.sort((a, b) => b.hit - a.hit)]);
        break;
      case "rateOfFire":
        setStatePlayers([
          ...statePlayers.sort((a, b) => a.rateOfFire - b.rateOfFire),
        ]);
        break;
      default:
        setStatePlayers([...statePlayers]);
        break;
    }
  };

  const searchByName = (val) => {
    const filtered = JSON.parse(JSON.stringify(players)).filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    setStatePlayers([...filtered]);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    searchByName(value);
  };

  const handleSelect = (event) => {
    const value = event.target.value;
    setStateSelect(value);
    sortTable(value);
  };

  return (
    <div>
      <label className="label">
        Search by name:
        <input type="text" name="name" onChange={handleSearch} />
      </label>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>WinPlace</th>
            <th>Name</th>
            <th>Hit</th>
            <th>RateOfFire</th>
          </tr>
        </thead>
        <tbody>
          {statePlayers.length
            ? statePlayers.map((player, index) => (
                <TableItem player={player} idx={index} key={player.winPlace} />
              ))
            : null}
        </tbody>
      </table>
      <div>
        <label className="label">
          Sort:
          <select
            value={stateSelected}
            onChange={handleSelect}
            className="select"
          >
            <option value="win">sortByWin</option>
            <option value="name">sortByName</option>
            <option value="hit">sortByHit</option>
            <option value="rateOfFire">sortByRateOfFire</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default BiathlonTable;
