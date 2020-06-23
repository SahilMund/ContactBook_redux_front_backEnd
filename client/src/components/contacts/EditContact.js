import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  let { _id } = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paramid,setID] = useState();


  const contact = useSelector((state) => state.contact.contact);
  let history = useHistory();

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setID(contact._id);
    }
    dispatch(getContact(_id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();


    //Object.assign(contacts,{name:name,email:email,phone:phone},
    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });

    dispatch(updateContact(paramid,update_contact));
    history.push("/")
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header" id="editForm">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning btn-block" id="btnEdit" type="submit">
            Update Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
