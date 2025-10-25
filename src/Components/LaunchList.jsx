import * as API from "../Services/Launches.js";
import { LaunchItems } from "./LaunchItems";
import { useState, useEffect } from "react";
import "./comp-styles/LaunchList.css";

export function LaunchList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getAllLaunches().then(setData);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <p className="loading-text">LOADING..</p>
        </div>
      ) : (
        <div className="launch-list-container">
          {data.map((item) => (
            <LaunchItems key={item.flight_number} {...item} />
          ))}
        </div>
      )}
    </>
  );
}
