import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <h1>az</h1>
      <ul>
        {data.map((country) => (
          <li className="card">
            <img src={country.flags.svg} alt="img" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
