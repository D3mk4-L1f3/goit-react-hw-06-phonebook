import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import {
  ListStyle,
  ItemStyle,
  DatedCreate,
} from '../styled-component/list.styled';
import { ButtonStyle } from '../styled-component/form.styled';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filteredText = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteredArray = contacts.filter(contact => {
    const contactInfo = `${contact.name} ${contact.number}`
      .toLowerCase()
      .replace(/-/g, '');
    const filterTextLower = filteredText.toLowerCase().replace(/-/g, '');

    return contactInfo.includes(filterTextLower);
  });

  return (
    <>
      <ListStyle>
        {filteredArray.length === 0 ? (
          <p>It's empty :(</p>
        ) : (
          filteredArray.map(contact => (
            <ItemStyle key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <DatedCreate>
                Created: {new Date(contact.createdAt).toLocaleDateString()}
              </DatedCreate>
              <ButtonStyle onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </ButtonStyle>
            </ItemStyle>
          ))
        )}
      </ListStyle>
    </>
  );
}
