import React from "react";


const Main = ({ children }) => {
  console.log(children)
  return (
    <div>
      {children}
    </div>
  );
};

export default Main;
