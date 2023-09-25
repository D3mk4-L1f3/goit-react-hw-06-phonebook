import { useDispatch } from 'react-redux';
import { filter } from '../../redux/filterSlice';

import { MainContainerStyle } from '../styled-component/app.styled';
import { InputStyle } from '../styled-component/form.styled';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterText = e.target.value;
    dispatch(filter(filterText));
  };

  return (
    <MainContainerStyle>
      <h3>Find contacts by part of name or number</h3>
      <InputStyle
        onChange={handleFilterChange}
        name="searcher"
        type="text"
        placeholder="... searching ..."
      />
    </MainContainerStyle>
  );
}
