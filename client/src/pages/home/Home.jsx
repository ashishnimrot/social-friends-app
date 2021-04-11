import React from "react";
import Feed from "../../components/feed/Feed";
import Righbar from "../../components/rightbar/Righbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/toolbar/Topbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Righbar />
      </div>
    </>
  );
}
