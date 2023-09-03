import React from 'react';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';

export function ImageGalleryItem({ image: { id, tags, webformatURL } }) {
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImg src={webformatURL} alt={tags} data-id={id} />
    </ImageGalleryItemStyled>
  );
}
