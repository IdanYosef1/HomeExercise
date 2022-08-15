function Employee({
  emp,
  difference,
  divColor,
  triangle,
  differenceSalary,
  lower,
}) {
  const max = triangle === "triangleUp" ? emp.Salary : emp.Salary + difference;

  return (
    <div className="div-employee">
      <div
        className={divColor}
        style={{ height: `calc(150px + 130px * ${emp.Salary / max})` }}
      >
        <div className="internalDiv-salary">
          <span className="empName">{emp.Name}</span>
          <div className="div-line"></div> ${emp.Salary.toLocaleString("en-US")}
        </div>
      </div>
      <div className="div-difference">
        <div className={differenceSalary}>
          {" "}
          {lower ? "-" : ""}${difference.toLocaleString("en-US")}
        </div>
        <div className={triangle}></div>
      </div>
    </div>
  );
}

export default Employee;
