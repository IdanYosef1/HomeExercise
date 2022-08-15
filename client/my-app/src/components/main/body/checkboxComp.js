import { useEffect, useState } from "react";
import { getAll } from "../../../axios";
import CheckboxPerson from "./checkboxPerson";

const url = "http://localhost:5000/get_all_employees";

function CheckboxComp({ compare, setCompare }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      try {
        const data = (await getAll(url)).data;
        setEmployees(data.list_employees);
      } catch (err) {
        console.log(err);
      }
    }
    getEmployees();
  }, []);

  const checked = (employee) => {
    setCompare({
      ...compare,
      numOfClick: compare.numOfClick + 1,
      twoEmployees: [...compare.twoEmployees, employee],
    });
  };

  const notChecked = (employee) => {
    setCompare({
      ...compare,
      numOfClick: compare.numOfClick - 1,
      twoEmployees: compare.twoEmployees.filter(
        (emp) => emp.Email !== employee.Email
      ),
    });
  };

  const bool = (employee) => {
    if (compare.numOfClick === 2) {
      if (
        employee.Email === compare.twoEmployees[0].Email ||
        employee.Email === compare.twoEmployees[1].Email
      ) {
        return false;
      }
      return true;
    }
    return false;
  };

  return (
    <div className="div-checkboxComp">
      <div className="internalDivBody">
        {employees.map((employee) => {
          return (
            <CheckboxPerson
              key={employee.Email}
              employee={employee}
              updateCompare={checked}
              removeClick={notChecked}
              bool={bool(employee)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CheckboxComp;
