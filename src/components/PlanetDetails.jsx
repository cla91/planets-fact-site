import React from "react";

export default function PlanetDetails({
  rotation,
  revolution,
  radius,
  temperature,
}) {
  return (
    <ul className="planet-main_details">
      <li>
        Rotation time <span>{rotation}</span>
      </li>
      <li>
        Revolution time <span>{revolution}</span>
      </li>
      <li>
        Radius <span>{radius}</span>
      </li>
      <li>
        Average temp. <span>{temperature}</span>
      </li>
    </ul>
  );
}
