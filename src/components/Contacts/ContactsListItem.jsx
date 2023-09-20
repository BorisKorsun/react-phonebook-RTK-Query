import { DeleteBtn, Item } from './Contacts.styled';
import { useDeleteContactMutation } from 'redux/contacts';
import {  toast } from 'react-toastify';

export default function ContactsListItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <DeleteBtn
        onClick={() => {deleteContact(id);toast.success('Contact was deleted succesfully')}}
        disabled={isDeleting}
        type="button"
      >
        {isDeleting ? 'Deleting' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
}
