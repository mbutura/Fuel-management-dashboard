import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <header>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      </header>
    </div>
  );
}