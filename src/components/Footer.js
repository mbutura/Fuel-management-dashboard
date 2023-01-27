import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer" class="w3-panel w3-yellow" >
      <footer>
      <h1>{props.note}</h1>
      </footer>
    </div>
  );
}