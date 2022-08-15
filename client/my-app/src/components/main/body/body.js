import Compare from "../../compare/compare";
import Instructon from "./instruction";
import CheckboxComp from "./checkboxComp";
import { useState } from "react";

function Body() {
  const [compare, setCompare] = useState({ numOfClick: 0, twoEmployees: [] });

  const compareOrInstruction =
    compare.numOfClick === 2 ? (
      <Compare arr={compare.twoEmployees} />
    ) : (
      <Instructon />
    );

  return (
    <div className="body-main">
      <CheckboxComp compare={compare} setCompare={setCompare} />
      {compareOrInstruction}
    </div>
  );
}

export default Body;
