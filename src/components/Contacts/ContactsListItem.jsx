import { DeleteBtn, Item } from './Contacts.styled';
import { useDeleteContactMutation } from 'redux/contacts';

export default function ContactsListItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <DeleteBtn
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
        type="button"
      >
        {isDeleting ? 'Deleting' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
}
