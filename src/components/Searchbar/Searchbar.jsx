import React from 'react';
import { SearchbarStyled } from './Searchbar.styled';

export function Searchbar() {
  return (
    <SearchbarStyled>
      <form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </SearchbarStyled>
  );
}
