import React from "react";

function MotionButton({ label, onClick }) {
  return (
    <button
      className="motion-button px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default MotionButton;
