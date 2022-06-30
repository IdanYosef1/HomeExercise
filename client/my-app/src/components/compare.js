import { useState } from "react";
import Employee from "./employee";

function Compare({ arr }) {
    const [arrSort] = useState(arr.sort((a,b) => a.Salary - b.Salary));
    const [employees] = useState({higher:arrSort[1] , lower:arrSort[0]});

  return (
    <div className='div-compare'>
        <span className="span-whoEarns">so... <br/> Who earns the most?</span>
        <div className="compareEmployees">
            <Employee emp={employees.higher} difference={employees.higher.Salary - employees.lower.Salary} 
                      divColor='blue' triangle='triangleUp' differenceSalary='differenceSalaryUp' lower={false}/>
            <div className="div-Vs">
                <div className="internalDiv-Vs">
                    <div className="internalDiv-salary">
                        <span className="empName">Vs.</span> 
                        <div className="div-Vs-line"></div>
                        <div className="yearlyIncome">Yearly income </div>
                    </div>    
                </div>
                <div className="div-difference">
                    <span className="span-difference"></span>
                </div>
            </div>
            <Employee emp={employees.lower} difference={employees.higher.Salary - employees.lower.Salary} divColor='orange'
                      triangle='triangleDown' differenceSalary='differenceSalaryDown' lower={true} />    
        </div>
    </div>
  );
}

export default Compare;