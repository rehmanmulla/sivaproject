import React from "react";
import "./topbar.css";
import { MoreVert } from "@material-ui/icons";

export default function Topbar() {

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard</span>
        </div>
        <div className="topRight">
          <img className="topAvatar" alt=""
            src="logo192.png"
          />
          <div className="profile">
            <MoreVert className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
