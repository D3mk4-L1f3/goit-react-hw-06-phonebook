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
  return (
    <MainAppStyle>
      <MainContainerStyle>
        <MainTitleStyle>Phonebook</MainTitleStyle>
        <ContactForm />
      </MainContainerStyle>
      <MainContainerStyle>
        <SecondTitleStyle>Contacts</SecondTitleStyle>
        <Filter />
      </MainContainerStyle>
      <ContactList />
    </MainAppStyle>
  );
}
