import React from 'react';
import { ButtonStyled } from './Button.styled';

export function ButtonLoadMore({ onClick }) {
  // state = {
  //   page: 1,
  // };

  // onClickLoadMore = () => {
  //   this.setState({ page: this.state.page + 1 });
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const { page } = this.state;
  //   if (prevState.page !== page) {
  //     this.props.onClick(page);
  //   }
  // }

  // onClickLoadMore(){
  //   this.props.onClick();
  // }

  return <ButtonStyled onClick={onClick}>Load more</ButtonStyled>;
}
