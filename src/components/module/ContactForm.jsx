// ContactForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

import {
  FormAddStyle,
  LabelStyle,
  InputStyle,
  ButtonStyle,
} from 'components/styled-component/form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const formattedName = name.replace(/\b\w/g, l => l.toUpperCase());
    const formattedNumber = number.replace(/[^\d]/g, '');
    const phoneNumberWithHyphens = formattedNumber.replace(
      /^(\d{3})(\d{2})(\d+)$/,
      '$1-$2-$3'
    );

    const user = {
      name: formattedName,
      id: nanoid(),
      number: phoneNumberWithHyphens,
    };

    // Dispatch the action to add a contact
    dispatch(addContact(user));

    setName('');
    setNumber('');
  };

  return (
    <FormAddStyle onSubmit={handleSubmit}>
      <LabelStyle>
        Name:
        <InputStyle
          type="text"
          name="name"
          required
          placeholder="... or full name"
          value={name}
          onChange={handleInputChange}
          autoComplete="name"
        />
      </LabelStyle>
      <LabelStyle>
        Number:
        <InputStyle
          type="tel"
          name="number"
          required
          placeholder="... only numbers"
          value={number}
          onChange={handleInputChange}
          autoComplete="tel"
        />
      </LabelStyle>
      <ButtonStyle type="submit">Add Contact</ButtonStyle>
    </FormAddStyle>
  );
}
