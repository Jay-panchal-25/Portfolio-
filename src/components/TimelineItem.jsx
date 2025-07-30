import React from "react";

const TimelineItem = ({ title, subtitle, description }) => {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[-10px] top-1 w-5 h-5 bg-blue-800 rounded-full"></div>
      <h3 className="font-semibold text-2xl">{title}</h3>
      <p className="text-md text-gray-500">{subtitle}</p>
      <p className="text-md mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default TimelineItem;
