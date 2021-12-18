import { ADD_SERVICE, REMOVE_SERVICE, PUT_SERVICES, SET_STATUS } from '../actions/actionTypes';

const initialState = {
  items: [
    // { id: Math.random(10000), name: 'Диагностика', price: 'Бесплатно' },
    // { id: Math.random(10000), name: 'Замена стекла', price: 21000 },
    // { id: Math.random(10000), name: 'Замена дисплея', price: 25000 }
  ],
  url: 'http://localhost:7070/',
  status: ''
}

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: Math.random(10000), name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);
    case PUT_SERVICES:
      return { ...state, items: action.payload }
    case SET_STATUS:
      return { ...state, status: action.payload }
    default:
      return state;
  }
}
