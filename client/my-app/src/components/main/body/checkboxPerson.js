import { useState } from "react";
import EditComp from "./editComp";
import Context from "../../../context";

function CheckboxPerson({ employee, updateCompare, removeClick, bool }) {
  const [edit, setEdit] = useState(false);
  const [hoveredDiv, setHoveredDiv] = useState(false);
  const [hoveredEdit, sethoveredEdit] = useState(false);

  const showEdit = () => {
    setEdit(true);
  };

  const hideEdit = () => {
    setEdit(false);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      updateCompare(employee);
    } else {
      removeClick(employee);
    }
  };

  const changeColor = () => {
    setHoveredDiv(true);
  };

  const defaultColor = () => {
    setHoveredDiv(false);
  };

  let hoverDiv = hoveredDiv ? "#828282" : "black";
  let hoverEdit = hoveredEdit ? "black" : hoverDiv;
  hoverEdit = bool ? "rgba(0, 0, 0, 0.2)" : hoverEdit;
  let employeeColor = bool ? "rgba(0, 0, 0, 0.2)" : "black";
  employeeColor = bool ? employeeColor : hoverDiv;
  let op = hoveredDiv ? "0.5" : "1";
  op = bool ? "1" : op;

  const showButton = edit ? (
    <EditComp
      employee={employee}
      sethoveredEdit={sethoveredEdit}
      bool={bool}
      hoverEdit={hoverEdit}
    />
  ) : null;

  return (
    <Context.Provider value={{ hoverEdit: hoverEdit }}>
      <div className="div-checkboxPerson">
        <input
          type="checkbox"
          onChange={handleChange}
          disabled={bool}
          onMouseOver={changeColor}
          onMouseLeave={defaultColor}
          style={{ opacity: op }}
        />{" "}
        <div
          className="div-edit"
          onMouseOver={showEdit}
          onMouseLeave={hideEdit}
        >
          <span
            style={{ color: employeeColor }}
            onMouseOver={changeColor}
            onMouseLeave={defaultColor}
          >
            {employee.Name}
          </span>
          {showButton}
        </div>
      </div>
    </Context.Provider>
  );
}

export default CheckboxPerson;
