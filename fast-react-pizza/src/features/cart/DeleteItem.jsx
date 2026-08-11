import { useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({pizzaId}) {
  const dispatch = useDispatch();

  function handleItemRemove() {
    dispatch(removeItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleItemRemove}>
      Delete
    </Button>
  );
}

export default DeleteItem;
