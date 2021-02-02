import React, { useState, useEffect } from "react";

export default function Aboutus() {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <ul>
      <li>
        <p>About the Company</p>
      </li>
      <li>
        <p>About Our Team</p>
      </li>
      <li>
        <p>Career</p>
      </li>
    </ul>
  );
}
