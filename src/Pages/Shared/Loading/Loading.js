import React from "react";

const Loading = () => {
  return (
    <div className="h-screen mt-[-200px] flex items-center justify-center ">
      <div className="w-16 h-16 border-b-4 border-secondary rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
