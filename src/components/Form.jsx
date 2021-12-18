// import { useSelector, useDispatch } from "react-redux";
// import { listActions } from "../redux/listSlice";
// import { formActions } from "../redux/formSlice";

export default function Form() {
  // const dispatch = useDispatch();
  // const { name, price } = useSelector((store) => store.formSlice.form);
  // const items = useSelector((store) => store.listSlice.items);

  const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   dispatch(formActions.change({type: name, value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  //   const itemInStore = items.find(item => item.name === name || item.price === price);
  //   if (itemInStore) {
  //     const id = itemInStore.id;
  //     dispatch(listActions.changeItem({id, name, price}));
  //     dispatch(formActions.clearInput());
  //     return
  //   }
  //   dispatch(listActions.addItem({id: Math.random(), name, price}));
  //   dispatch(formActions.clearInput());
  }

  const handleCancel = (e) => {
  //   e.preventDefault();
  //   dispatch(formActions.clearInput());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name='name'
        // value={name}
        onChange={handleChange}
        style={{width: 200}}
      />
      <input 
        name='price'
        // value={price}
        onChange={handleChange}
        style={{width: 200}}
      />
      <button onClick={handleSubmit} type='primary'>Save</button>
      <button onClick={handleCancel} type='primary'>Cancel</button>
    </form>
  )
}
