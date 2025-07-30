import React from "react";

const LedDivider: React.FC = () => {
  return (
    <div className="relative w-full h-1">
      <div className="led-divider" />
      <div className="led-divider-glow" />
    </div>
  );
};

export default LedDivider;
