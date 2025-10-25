import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./comp-styles/LaunchItems.css";

export function LaunchItems(item) {
  return (
    <div className="launch-item">
      <div className="launch-details">
        <div className="launch-details-info">
          <h1 className="info-text mission-name">
            {item?.mission_name ?? "Unknown"}
          </h1>
          <section className="launch-details-section">
            <p className="info-text">
              <b>Rocket name:</b> {item?.rocket.rocket_name ?? "Unknown"}
            </p>
            <p className="info-text">
              <b>Rocket type:</b> {item?.rocket.rocket_type ?? "Unknown"}
            </p>
            <p className="info-text">
              <b>Launch year:</b> {item?.launch_year ?? "Unknown"}
            </p>
            <p className="info-text">
              <b>Rocket site:</b>{" "}
              {item?.launch_site.site_name_long ?? "Unknown"}
            </p>
          </section>
        </div>
      </div>

      {/* Details and status */}
      <Flex mt="3" justifyContent="space-between" alignItems="center">
        <Link to={`/launches/${item?.flight_number}`}>
          <button type="button" className="launch-details-button">
            Details
          </button>
        </Link>
        <span
          className={`status-tag ${item.launch_success ? "success" : "failed"}`}
        >
          {item.launch_success ? "Success" : "Failed"}
        </span>
      </Flex>
    </div>
  );
}
