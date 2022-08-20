import { useState, useEffect, useContext, createContext } from "react";

export const WindowsSizeContext2 = createContext();

export const useWindowsSizeContext2 = () => useContext(WindowsSizeContext2);

export const WindowsSizeContextProvider2 = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScreenSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleScreenSize);
  }, []);

  return (
    <WindowsSizeContext2.Provider
      value={{ width, setWidth, height, setHeight }}
    >
      {children}
    </WindowsSizeContext2.Provider>
  );
};
