import { useEffect, useState } from 'react';
import '../App.css';
import { getAll } from '../axios';
import CheckboxPerson from './checkboxPerson';
import Compare from './compare';
import Footer from './footer';
import Header from './header';

const url = 'http://localhost:5000/get_all_employees';

function Main() {
  const [employees, setEmployees] = useState([]);
  const [compare, setCompare] = useState({numOfClick:0, twoEmployees:[]});

  useEffect(() => {
    async function getEmployees(){
        const data = (await getAll(url)).data;
        setEmployees(data.list_employees);
    }
    getEmployees();
  },[]);

  const checked = (employee) => {
      setCompare({...compare, numOfClick:compare.numOfClick + 1, twoEmployees:[...compare.twoEmployees, employee]});
  }

  const notChecked = (employee) => {
      setCompare({...compare, numOfClick:compare.numOfClick - 1,
                  twoEmployees:compare.twoEmployees.filter((emp) => emp.Email !== employee.Email)});
  }

  const smallerthanTwo = <p className='text'>
                            Pick 2 Employees  <span className='textBold'>and see who <br/> earns the most</span>
                         </p> 

  let equalToTwo;
  if(compare.numOfClick === 2){
    equalToTwo = <Compare arr={compare.twoEmployees}/>
  }

  const bool = (employee) => {
    if(compare.numOfClick === 2){
      if((employee.Email === compare.twoEmployees[0].Email || employee.Email === compare.twoEmployees[1].Email)){
        return false;
      }
      return true;
    }
    return false;
  }   

  return (
    <div className='main'>
      <Header />
      <div className='body-main'>
          <div className='checkboxPersons'>
            <div className='internalDivBody'>
                {employees.map((employee) => {
                  return <CheckboxPerson key={employee.Email} employee={employee} updateCompare={checked} 
                          removeClick={notChecked} bool={bool(employee)} />
                })}  
            </div>
          </div>
          {(compare.numOfClick === 2) ? equalToTwo : smallerthanTwo}
      </div>
    <Footer />  
    </div>
  );
}


export default Main;