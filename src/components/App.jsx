import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from 'redux/contacts';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook/';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

export default function App() {
  //
  const [filter, setFilter] = useState('');

  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  //

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const onSubmitForm = ({ name, phone }) => {
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already exists`);
      return;
    }
    const newContact = {
      name,
      phone,
    };
    addContact(newContact);
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <Phonebook onSubmit={onSubmitForm} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <Contacts contacts={filterContacts()} onButtonClick={deleteContact} />
      </Section>
    </>
  );
}
