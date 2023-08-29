import React from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery() {
  return (
    <ImageGalleryStyled>
      <ImageGalleryItem />
    </ImageGalleryStyled>
  );
}
