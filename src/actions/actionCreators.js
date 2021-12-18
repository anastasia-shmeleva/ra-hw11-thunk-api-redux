import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_FIELD,
  PUT_SERVICES,
} from './actionTypes';
import store from '../store';

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_FIELD, payload: { name, value } };
}

// export function fetchItems(dispatch,getState) {
//   let state = store.getState()
//   fetch(state.list.url+'api/services')
//     .then(response => response.json())
//     .then(json => store.dispatch({ type: PUT_SERVICES, payload: json }))
// }

// export const fetchItemsThunked = () => async (dispatch, getState) => {
//   const url = getState().serviceList.url;
//   dispatch({ type: 'SET_STATUS', payload: 'pending' });
//   await fetch(url)
//     .then((response) => response.json())
//     .then((json) => {
//       dispatch({ type: 'PUT_SERVICES', payload: json });
//     });
//   dispatch({ type: 'SET_STATUS', payload: 'success' });
// };
