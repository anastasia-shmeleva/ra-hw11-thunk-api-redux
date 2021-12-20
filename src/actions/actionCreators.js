import {
  REMOVE_SERVICE,
  CHANGE_FIELD,
  PUT_SERVICES,
  SET_STATUS,
  CLEAR_FORM,
} from './actionTypes';

const url = 'http://localhost:7070/api/services';

export function changeServiceField(name, value) {
  return { type: CHANGE_FIELD, payload: { name, value } };
}

export function clearForm() {
  return { type: CLEAR_FORM, payload: '' };
}

export function setStatus(text) {
  return { type: SET_STATUS, payload: text };
}

export async function fetchItems(dispatch) {
  dispatch(setStatus('pending'));
  try {
    await fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch({ type: PUT_SERVICES, payload: json });
      dispatch(setStatus('success'));
    });
  } catch (error) {
    dispatch(setStatus('error'));
  }
}

export async function getItem(dispatch, id) {
  dispatch(setStatus('pending'));
  try {
    await fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(changeServiceField('name', json.name));
      dispatch(changeServiceField('price', json.price));
      dispatch(changeServiceField('content', json.content));
      dispatch(setStatus('success'));
    });
  } catch (error) {
    dispatch(setStatus('error'));
  }
}

export async function removeService(dispatch, id) {
  dispatch(setStatus('pending'));

  try {
    await fetch(`http://localhost:7070/api/services/${id}`, {
    method: 'DELETE',
    body: id
  });
  fetchItems(dispatch)
    // dispatch({ type: REMOVE_SERVICE, payload: { id } });
    // dispatch(setStatus('success'));
  } catch (error) {
    dispatch(setStatus('error'));
  }
}

export async function changeItem(dispatch, item) {
  dispatch(setStatus('pending'));

  const formData = new FormData();
  formData.append('id', item.id);
  formData.append('name', item.name);
  formData.append('price', item.price);
  formData.append('content', item.content);

  try {
    await fetch(url, {
      method: 'POST',
      body: new URLSearchParams(formData)
    });
    dispatch(setStatus('success'));
  } catch (error) {
    dispatch(setStatus('error'));
  }
}