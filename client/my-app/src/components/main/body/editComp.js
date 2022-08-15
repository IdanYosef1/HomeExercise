import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../../context";
import Pencil from "./pencil";

function EditComp({ employee, sethoveredEdit, bool }) {
  let history = useHistory();
  const { hoverEdit } = useContext(Context);

  const clickEdit = () => {
    history.push("/update", { employee });
  };

  const changeColorEdit = () => {
    sethoveredEdit(true);
  };

  const defaultColorEdit = () => {
    sethoveredEdit(false);
  };

  return (
    <button className="button-edit" onClick={clickEdit} disabled={bool}>
      <Pencil
        changeColorEdit={changeColorEdit}
        defaultColorEdit={defaultColorEdit}
      />
      <span
        style={{ color: hoverEdit }}
        className="edit"
        onMouseOver={changeColorEdit}
        onMouseLeave={defaultColorEdit}
      >
        Edit
      </span>
    </button>
  );
}
export default EditComp;
