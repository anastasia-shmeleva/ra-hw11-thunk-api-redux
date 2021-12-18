import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, fetchItems } from '../actions/actionCreators';
import { PUT_SERVICES, SET_STATUS } from '../actions/actionTypes';
import { Facebook } from 'react-spinners-css';

export default function TaskList() {
  const url = 'http://localhost:7070/api/services';
  const dispatch = useDispatch();

  useEffect(() => {
    fetchItems();
  }, []);

  function fetchItems() {
    // let state = store.getState()
    dispatch({ type: SET_STATUS, payload: 'pending' });
    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: PUT_SERVICES, payload: json });
        dispatch({ type: SET_STATUS, payload: 'success' });
      });
  }

  const { items, status } = useSelector((rootReducet) => rootReducet.list);
  
  const handleEdit = (item) => {
  //   dispatch(formActions.change({type: 'name', value: item.name}));
  //   dispatch(formActions.change({type: 'price', value: item.price}));
  }

  const handleRemove = (id) => {
  //   dispatch(listActions.deleteItem(id));
  }
  
  // let filteredList = [];
  // let noMatch = null;

  // if (filter !== '' && filter !== undefined) {
  //   items.filter((item) => {
  //     if (!item.name.startsWith(filter)) {
  //       return noMatch = 'Нет совпадений, попробуйте изменить поиск';
  //     } 
  //     else {
  //       noMatch = null;
  //       return filteredList.push(item);
  //     }
  //   });

  //   return (
  //     (noMatch !== null) ? 
  //     <div>{noMatch}</div> : 
  //     <ul className='list'>
  //       {filteredList.map(item => (
  //         <li key={item.id} style={{marginTop: 10}}>
  //           <div style={{display: 'inline-block', width: 200}}>
  //             {item.name}
  //           </div>
  //           <div style={{display: 'inline-block', width: 100}}>
  //             {item.price}
  //           </div>
  //           <button onClick={() => handleEdit(item)}>✎</button>
  //           <button onClick={() => handleRemove(item.id)}>X</button>
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  if (status === 'pending') return <div style={{textAlign: 'center'}}><Facebook color={'black'}/></div>

  return (
    <ul className='list'>
      {items && 
        items.map(item => (
          <li key={item.id} style={{marginTop: 10}}>
            <div style={{display: 'inline-block', width: 200}}>
              {item.name}
            </div>
            <div style={{display: 'inline-block', width: 100}}>
              {item.price}
            </div>
            <button onClick={() => handleEdit(item)}>✎</button>
            <button onClick={() => handleRemove(item.id)}>X</button>
          </li>
        ))}
    </ul>
  )
}
