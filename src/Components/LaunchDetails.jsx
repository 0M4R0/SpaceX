import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../Services/Launches.js";
import "./comp-styles/LaunchDetails.css";

export function LaunchDetails(item) {
  const [launch, setLaunch] = useState(null);
  const { launchId } = useParams();

  useEffect(() => {
    API.getLaunchById(launchId).then(setLaunch);
  }, [launchId]);

  if (!launch) {
    return (
      <div className="launch-details-box">
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  // Get vid from Link
  const videoId = launch.links.video_link
    ? new URL(launch.links.video_link).searchParams.get("v")
    : null;

  return (
    <div className="launch-details-box">
      <div className="details-container">
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Details</h2>

        {/* Info about the launch */}
        <p className="launch-info-text">
          {launch?.details ? launch.details : "Not found"}
        </p>

        {/* launch video*/}
        <div className="launch-video-container">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Back to the main page*/}
        <Link to="/SpaceX">
          <button
            style={{
              marginTop: "16px",
              padding: "10px 20px",
              backgroundColor: "purple",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
