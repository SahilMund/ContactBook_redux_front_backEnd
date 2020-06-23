import api from "./api";

import {
  FETCH_ALL,
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

// actions

//add a contact
export const addContact = (contact) => (dispatch) => {
  api
    .Contacts()
    .create(contact)
    .then((res) => {
      console.log(res);
      dispatch({
        type: CREATE_CONTACT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//FETCH ALL CONTACT
export const fetchAll = () => (dispatch) => {
  api
    .Contacts()
    .fetchAll()
    .then((res) => {
      console.log(res);
      dispatch({
        type: FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//GET CONTACT BY ID
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// update a contact by id
export const updateContact = (id, data) => (dispatch) => {
  api
    .Contacts()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// delete a contact by id
export const deleteContact = (id) => (dispatch) => {
  api
    .Contacts()
    .delete(id)
    .then((res) => {
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
///////////////////////////////////////////////////////////////////////////

// select all contact
export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

// clear selected contacts
export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});

// delete selected contacts

export const deleteAllContact = () => (dispatch) => {

  api
    .Contacts()
    .deleteSelected()
    .then((res) => {
     
      dispatch({
        type: DELETE_SELECTED_CONTACT,
        payload:res.data
        
      });
    })
    .catch((err) => console.log(err));
};
