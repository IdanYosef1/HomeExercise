import { useState } from "react";
import { useHistory } from "react-router-dom";

function CheckboxPerson({ employee, updateCompare, removeClick, bool}) {
    const [edit, setEdit] = useState(false);
    const [hoveredDiv, setHoveredDiv] = useState(false);
    const [hoveredEdit, sethoveredEdit] = useState(false);
    let history = useHistory();

    const handleChange = (e) => {
        if(e.target.checked) {
            updateCompare(employee);
        } else {
            removeClick(employee);
        }
    }

    const showEdit = () => {
        setEdit(true);
    }

    const hideEdit = () => {
        setEdit(false);
    }

    const clickEdit = () => {
        history.push('/update', {employee});
    }

    const changeColor = () => {
        setHoveredDiv(true);
    }

    const defaultColor = () => {
        setHoveredDiv(false);
    }

    const changeColorEdit = () => {
        sethoveredEdit(true);
    }

    const defaultColorEdit = () => {
        sethoveredEdit(false);
    }
    
    let hoverDiv = (hoveredDiv) ? '#828282' : 'black' ;
    let hoverEdit = (hoveredEdit) ? 'black' : hoverDiv ;
    hoverEdit = (bool) ? 'rgba(0, 0, 0, 0.2)' : hoverEdit ;
    let employeeColor = (bool) ?  'rgba(0, 0, 0, 0.2)' : 'black' ;
    employeeColor = (bool) ?  employeeColor : hoverDiv;
    let op = (hoveredDiv) ?  '0.5' : '1';
    op = (bool) ? '1' : op;

    const showButton = (edit) ?
    <button className="button-edit" onClick={clickEdit} disabled={bool} > 
        <div className="imgEdit" onMouseOver={changeColorEdit} onMouseLeave={defaultColorEdit}>
            <svg style={{color:hoverEdit}} xmlns="http://www.w3.org/2000/svg" width="7" height="7" 
            fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 
                3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 
                7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 
                1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
        </div>
      <span style={{color: hoverEdit}} className="edit" onMouseOver={changeColorEdit} onMouseLeave={defaultColorEdit}>Edit</span>
    </button>
    : null ;

  return (
    <div className="div-checkbox">
      <input type='checkbox' onChange={handleChange} disabled={bool} 
      onMouseOver={changeColor} onMouseLeave={defaultColor} style={{opacity: op}} /> 
      <div className="div-edit" onMouseOver={showEdit} onMouseLeave={hideEdit}>
      <span style={{color:employeeColor}} onMouseOver={changeColor} onMouseLeave={defaultColor}>{employee.Name}</span> 
      {showButton}
      </div>
    </div>
  );
}

export default CheckboxPerson;