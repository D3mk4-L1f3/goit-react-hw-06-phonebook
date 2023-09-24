import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/contactsSlice';

import ContactForm from './module/ContactForm';
import ContactList from './module/ContactList';
import Filter from './module/ContactFilter';

import {
  MainAppStyle,
  MainContainerStyle,
  MainTitleStyle,
  SecondTitleStyle,
} from './styled-component/app.styled';

export function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      const parsedContacts = JSON.parse(storedContacts);
      parsedContacts.forEach(contact => {
        dispatch(addContact(contact));
      });
    }
  }, [dispatch]);

  const getFilteredContacts = () => {
    const filterWithoutDashes = filter.replace(/-/g, '');

    if (!filter) {
      return contacts;
    }

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterWithoutDashes) ||
        contact.number.replace(/-/g, '').includes(filterWithoutDashes)
    );
  };

  const setAndFilterContacts = value => {
    dispatch(setFilter(value));
  };

  return (
    <MainAppStyle>
      <MainContainerStyle>
        <MainTitleStyle>Phonebook</MainTitleStyle>
        <ContactForm addContact={addContact} />
      </MainContainerStyle>
      <MainContainerStyle>
        <SecondTitleStyle>Contacts</SecondTitleStyle>
        <Filter setFilter={setAndFilterContacts} />
      </MainContainerStyle>
      <ContactList
        filteredArray={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </MainAppStyle>
  );
}