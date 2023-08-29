import React from 'react';
import {
  SearchForm,
  SearchbarStyled,
  SearchFormButton,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export function Searchbar() {
  return (
    <SearchbarStyled>
      <SearchForm>
        <SearchFormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyled>
  );
}
