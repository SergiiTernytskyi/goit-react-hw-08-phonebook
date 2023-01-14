import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { Input, Placeholder, Wrapper } from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const inputHandler = event => {
    const form = event.target;
    dispatch(filterContacts(form.value));
  };

  const filterId = nanoid();

  return (
    <Wrapper>
      <Input
        id={filterId}
        type="text"
        name="filter"
        required="required"
        onChange={inputHandler}
        value={filter}
      />
      <Placeholder>Contact name</Placeholder>
    </Wrapper>
  );
};
