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
  const [formData, setFormData] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [name]: name === 'number' ? value.replace(/[^\d]/g, '') : value,
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = formData;
    const formattedName = name.replace(/\b\w/g, l => l.toUpperCase());
    const phoneNumberWithHyphens = number.replace(
      /^(\d{3})(\d{2})(\d+)$/,
      '$1-$2-$3'
    );

    const user = {
      name: formattedName,
      id: nanoid(),
      number: phoneNumberWithHyphens,
    };

    dispatch(addContact(user));

    setFormData({ name: '', number: '' });
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
          value={formData.name}
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
          value={formData.number}
          onChange={handleInputChange}
          autoComplete="tel"
        />
      </LabelStyle>
      <ButtonStyle type="submit">Add Contact</ButtonStyle>
    </FormAddStyle>
  );
}
