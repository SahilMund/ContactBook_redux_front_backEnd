import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";
import { useDispatch } from "react-redux";

const Contact = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { _id, name, phone, email } = contact ? contact : "";
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            defaultChecked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="45" round={true} /> {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${_id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
               
        <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deleteContact(_id))}
        >
          remove_circle
        </span>

        {/* <Link to="#" onClick={() => dispatch(deleteContact(_id))}>
          <span className="fas fa-trash text-danger"></span>
        </Link> */}
      </td>
    </tr>
  );
};

export default Contact;
