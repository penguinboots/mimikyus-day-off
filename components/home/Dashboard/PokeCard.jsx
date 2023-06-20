import React from "react";
import TypeLabel from "./TypeLabel";
import portrait from "@/public/other/portrait.png";
import Image from "next/image";

export default function PokeCard() {
  return (
    <div className="poke-info-card">
      <h2>CHARACTER</h2>
      <Image
        className="poke-portrait"
        src={portrait}
        height="200"
        width="200"
        alt="Mimikyu Portrait"
      />
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
