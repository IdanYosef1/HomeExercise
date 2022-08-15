import InputForm from "./inputForm";

function UpdateForm({ employee, resetAll, updateEmployee }) {
  return (
    <div className="div-form">
      <form onSubmit={updateEmployee}>
        <InputForm
          type={"text"}
          inputName={"Address"}
          name={"Address"}
          val={employee.Address}
        />
        <InputForm
          type={"number"}
          inputName={"Phone"}
          name={"Phone"}
          val={employee.Phone}
        />
        <InputForm
          type={"email"}
          inputName={"Email"}
          name={"Email"}
          val={employee.Email}
        />
        <InputForm
          type={"text"}
          inputName={"Marital Status"}
          name={"MaritalStatus"}
          val={employee.MaritalStatus}
        />
        <InputForm
          type={"text"}
          inputName={"Gender"}
          name={"Gender"}
          val={employee.Gender}
        />
        <button type="submit" className="button-update">
          Update
        </button>
      </form>{" "}
      <button className="button-cancel" onClick={resetAll}>
        Cancel
      </button>{" "}
      <br />
    </div>
  );
}

export default UpdateForm;
