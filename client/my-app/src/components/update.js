import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { editEmployee } from "../axios";
import Footer from "./footer";
import Header from "./header";

const url = 'http://localhost:5000/edit_employee';

function Update() {
    let history = useHistory();
;   const [employee, setEmployee] = useState({Name:'', Address:'', Email:'', Phone:'', Gender:'', 
                                              MaritalStatus:'', salary:''});
    const [message, setMessage] = useState('');
    const [details, setDetails] = useState({});

    useEffect(() => {
        setEmployee(history.location.state.employee);
    },[history.location.state.employee])

    const handleChange = (e) => {
        const {name, value} = e.target;
        const obj = {...employee};
        obj[name] = value;
        setEmployee(obj);
    }

    const updateEmployee = async (e) => {
        setDetails(history.location.state.employee);
        setMessage('');
        e.preventDefault();
        await editEmployee(url, employee);
        history.replace({ state: {employee} });
        setMessage('Details Updated');
    }
    
    const goToMain = () => {
      history.push('/')
    } 

    const resetAll = () => {
      if(Object.keys(details).length !== 0){
        setEmployee(details);
      }
    } 

  return (
    <div className="main">
        <Header />
        <div className="body-update">
            <button className="button-main" onClick={goToMain}>{'<'} back</button>
            <span className="employeeName">{employee.Name}</span>
            <span className="editDetails">Edit Details</span>
            <div className="div-form">
              <form onSubmit={updateEmployee}>
              <div className="div-inputs">
                <span>Address</span> 
                <input 
                type="text" 
                className="input-details" 
                name="Address" 
                value={employee.Address} 
                onChange={handleChange} 
                required
                />
              </div>  
              <div className="div-inputs">
                <span>Phone</span> 
                <input 
                type="number" 
                className="input-details" 
                name="Phone" 
                value={employee.Phone} 
                onChange={handleChange} 
                required
                />
              </div>  
              <div className="div-inputs">
                <span>Email</span> 
                <input 
                type="email" 
                className="input-details" 
                name="Email" 
                value={employee.Email} 
                onChange={handleChange} 
                required
                />
              </div>
              <div className="div-inputs">
                <span>Martial Status</span> 
                <input 
                type="text" 
                className="input-details" 
                name="MaritalStatus" 
                value={employee.MaritalStatus} 
                onChange={handleChange} 
                required
                />
              </div>  
              <div className="div-inputs">
                <span>Gender</span> 
                <input 
                type="text" 
                className="input-details" 
                name="Gender" 
                value={employee.Gender} 
                onChange={handleChange} 
                required
                />
              </div>  
                <button type="submit" className="button-update">Update</button> 
              </form> <button className="button-cancel" onClick={resetAll}>Cancel</button> <br/>
            </div>
            <span className="message">{message}</span>
        </div>
      <Footer />
    </div>
  );
}

export default Update ;