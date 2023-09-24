import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import {
  ListStyle,
  ItemStyle,
  DatedCreate,
} from '../styled-component/list.styled';
import { ButtonStyle } from '../styled-component/form.styled';

export default function ContactList({ filteredArray }) {
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
            <DatedCreate>
              Created: {new Date(contact.createdAt).toLocaleDateString()}
            </DatedCreate>
            <ButtonStyle onClick={() => deleteContactHandler(contact.id)}>
              Delete
            </ButtonStyle>
          </ItemStyle>
        ))}
      </ListStyle>
    </>
  );
}
