import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import { getImages } from 'API';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Error } from 'components/Error/Error.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    isError: false,
    isLoader: false,
  };

  async componentDidMount() {
    const { searchQuery, page } = this.props;
    try {
      this.setState({ isError: false, isLoader: true });
      const images = await getImages(searchQuery, page);
      if (images.hits.length === 0) {
        toast.error(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      this.props.totalPages(images.totalHits);
      this.setState({ images: [...images.hits] });
    } catch (error) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoader: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.props;
    if (prevProps.searchQuery !== searchQuery || prevProps.page !== page) {
      try {
        this.setState({ isError: false, isLoader: true });
        const images = await getImages(searchQuery, page);
        this.props.totalPages(images.totalHits);
        if (prevProps.searchQuery !== searchQuery) {
          this.setState({ images: [...images.hits], isLoader: false });
          return;
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
        }));
      } catch (error) {
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }

  onClickItem = e => {
    this.props.onModalOpen(e.target.dataset.id);
  };

  render() {
    const { images, isError, isLoader } = this.state;
    return (
      <>
        <ImageGalleryStyled onClick={this.onClickItem}>
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ImageGalleryStyled>
        {isLoader && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#3F51B5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: 'center' }}
            wrapperClassName=""
            visible={true}
          />
        )}
        {isError && !isLoader && (
          <Error>
            <p>OOPS! There was an ERROR!</p>
          </Error>
        )}
      </>
    );
  }
}
