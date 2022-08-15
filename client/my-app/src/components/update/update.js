import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { editEmployee } from "./../../axios";
import Footer from "../main/footer/footer";
import Header from "../main/header/header";
import UpdateForm from "./updateForm";
import Context from "../../context";

const url = "http://localhost:5000/edit_employee";

function Update() {
  let history = useHistory();
  const [employee, setEmployee] = useState({
    Name: "",
    Address: "",
    Email: "",
    Phone: "",
    Gender: "",
    MaritalStatus: "",
    salary: "",
  });

  const [message, setMessage] = useState("");
  const [details, setDetails] = useState({});

  useEffect(() => {
    setEmployee(history.location.state.employee);
  }, [history.location.state.employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const obj = { ...employee };
    obj[name] = value;
    setEmployee(obj);
  };

  const updateEmployee = async (e) => {
    e.preventDefault();
    setDetails(history.location.state.employee);
    setMessage("");
    try {
      await editEmployee(url, employee);
      history.replace({ state: { employee } });
      setMessage("Details Updated");
    } catch (err) {
      console.log(err);
    }
  };

  const goToMain = () => {
    history.push("/");
  };

  const resetAll = () => {
    if (Object.keys(details).length !== 0) {
      setEmployee(details);
    }
  };

  return (
    <Context.Provider value={{ employeeUpdate: handleChange }}>
      <div className="main">
        <Header />
        <div className="body-update">
          <button className="button-back" onClick={goToMain}>
            {"<"} back
          </button>
          <span className="employeeName">{employee.Name}</span>
          <span className="editDetails">Edit Details</span>
          <UpdateForm
            employee={employee}
            resetAll={resetAll}
            updateEmployee={updateEmployee}
          />
          <span className="message">{message}</span>
        </div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default Update;
