import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { getImagesById } from 'API';
import { IconClose, ModalStyled, Overlay } from './Modal.styled';
import { Error } from 'components/Error/Error.styled';

export class Modal extends Component {
  state = {
    image: null,
    isLoader: false,
    isError: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isError: false, isLoader: true });
      const { hits } = await getImagesById(this.props.currentImageId);
      this.setState({ image: hits[0] });
    } catch (error) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoader: false });
    }
  }

  onModalClose = () => {
    this.props.onModalClose();
  };

  render() {
    const { image, isLoader, isError } = this.state;
    return (
      <Overlay onClick={this.onModalClose}>
        <ModalStyled>
          {image && <img src={image.largeImageURL} alt={image.tags} />}
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
        </ModalStyled>
        <IconClose onClick={this.onModalClose} />
      </Overlay>
    );
  }
}
