import { useContext } from "react";
import Context from "../../context";

function InputForm({ type, inputName, name, val }) {
  const { employeeUpdate } = useContext(Context);
  return (
    <div className="div-inputs">
      <span>{inputName}</span>
      <input
        type={type}
        className="input-details"
        name={name.replace(" ", "")}
        value={val}
        onChange={employeeUpdate}
        required
      />
    </div>
  );
}

export default InputForm;
