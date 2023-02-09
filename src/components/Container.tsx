import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container relative w-96 h-full bg-container bg-cover bg-center z-0  flex flex-col align-center p-4">
    <div className="absolute w-full h-full bg-stone-200/[0.3] z-10"></div>
      {children}
    </div>
  );
};

export default Container;
