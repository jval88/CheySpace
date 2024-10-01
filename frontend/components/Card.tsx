import React from "react";

interface CardProps {
  children: React.ReactNode; // Array of items with content as React nodes
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};

export default Card;
