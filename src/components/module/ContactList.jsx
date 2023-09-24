import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { ListStyle, ItemStyle } from '../styled-component/list.styled';
import { ButtonStyle } from '../styled-component/form.styled';

export default function List() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state =>
    state.contacts.filter.toLowerCase().replace(/-/g, '')
  );

  const filteredArray = filter
    ? contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter) ||
          contact.number.replace(/-/g, '').includes(filter)
      )
    : contacts;

  const dispatch = useDispatch();

  const deleteContactHandler = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <ListStyle>
        {filteredArray.map(contact => (
          <ItemStyle key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <ButtonStyle onClick={() => deleteContactHandler(contact.id)}>
              Delete
            </ButtonStyle>
          </ItemStyle>
        ))}
      </ListStyle>
    </>
  );
}
