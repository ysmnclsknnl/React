import React from "react";
import { useWindowsSizeContext2 } from "../WindowsSizeContext2";

const Title = () => {
  const { width, height } = useWindowsSizeContext2();
  return (
    <div>
      {width && height && (
        <h3>
          {" "}
          Screen Size is {width}/{height}
        </h3>
      )}
    </div>
  );
};

export default Title;
