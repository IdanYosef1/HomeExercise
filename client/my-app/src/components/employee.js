function Employee({emp, difference, divColor, triangle, differenceSalary, lower}) {
  return (
    <div className="div-employee">
        <div className={divColor} style={{height:`calc(260px * ${(emp.Salary / 15000)})`}}>
            <div className="internalDiv-salary">
                <span className="empName">{emp.Name}</span> 
                <div className="div-line"></div> ${emp.Salary.toLocaleString("en-US")} 
            </div>    
        </div>
        <div className="div-difference">
          <div className={differenceSalary}> {(lower) ? '-' : ''}${difference.toLocaleString("en-US")}</div>
          <div className={triangle}></div>
        </div> 
    </div>
  )
}


export default Employee;