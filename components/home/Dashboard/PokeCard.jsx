import React from "react";
import TypeLabel from "./TypeLabel";

export default function PokeCard() {
  return (
    <div className="poke-info-card">
      <h2>CURRENT FRIEND</h2>
      <div className="poke-portrait">POKEMON PORTRAIT</div>
      <div className="poke-desc">
        <h3>MIMIKYU</h3>
        <div className="type-container">
          <TypeLabel type="ghost" />
          <TypeLabel type="fairy" />
        </div>
      </div>
    </div>
  );
}
