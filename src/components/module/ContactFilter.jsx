import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { MainContainerStyle } from '../styled-component/app.styled';
import { InputStyle } from '../styled-component/form.styled';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { value } = evt.target;
    dispatch(setFilter(value));
  };

  return (
    <MainContainerStyle>
      <h3>Find contacts by part of name or number</h3>
      <InputStyle
        onChange={handleInputChange}
        name="searcher"
        type="text"
        value={filter}
        placeholder="... searching ..."
      />
    </MainContainerStyle>
  );
}
