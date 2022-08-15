import { useState } from "react";
import Employee from "./employee";
import Most from "./most";
import SalaryDifference from "./salaryDifference";
import VsComp from "./vsComp";

function Compare({ arr }) {
  const [arrSort] = useState(arr.sort((a, b) => a.Salary - b.Salary));
  const [employees] = useState({ higher: arrSort[1], lower: arrSort[0] });

  return (
    <div className="div-compare">
      <Most />
      <div className="compareEmployees">
        <Employee
          emp={employees.higher}
          difference={employees.higher.Salary - employees.lower.Salary}
          divColor="blue"
          triangle="triangleUp"
          differenceSalary="differenceSalaryUp"
          lower={false}
        />
        <div className="div-Vs">
          <VsComp />
          <SalaryDifference />
        </div>
        <Employee
          emp={employees.lower}
          difference={employees.higher.Salary - employees.lower.Salary}
          divColor="orange"
          triangle="triangleDown"
          differenceSalary="differenceSalaryDown"
          lower={true}
        />
      </div>
    </div>
  );
}

export default Compare;
