import React from "react";

const TimelineItem = ({ title, subtitle, description }) => {
  return (
    <div className="relative pl-6">
      <div className="absolute left-[-10px] top-1 w-3 h-3 bg-black rounded-full"></div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <p className="text-sm mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default TimelineItem;
