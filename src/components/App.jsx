// import { useDispatch } from 'react-redux';
//
import { useGetContactsQuery } from 'redux/contacts';
//

import Section from 'components/Section';
import Phonebook from 'components/Phonebook/';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

export default function App() {
  //
  const { data = [], } = useGetContactsQuery();

  console.log(data);
  //

  const contacts = []
  const filter = ''

  // const dispatch = useDispatch();

  const onFilterChange = e => {
    // const value = e.target.value;
    // dispatch(update(value));
  };

  const onSubmitForm = ({ name, number }) => {
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already exists`);
      return;
    }
    // dispatch(add(name, number));
  };

  const onDeleteBtnClick = deleteId => {
    // dispatch(remove(deleteId));
  };

  // const filterContacts = () => {
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <>
      <Section title="Phonebook">
        <Phonebook onSubmit={onSubmitForm} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <Contacts
          contacts={data}
          onButtonClick={onDeleteBtnClick}
        />
      </Section>
    </>
  );
}
