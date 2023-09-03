import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonLoadMore } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { ScrollUp } from './ScrollUp/ScrollUp';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    totalPages: null,
    isModal: false,
    isScrollUp: false,
    isLoader: true,
    currentImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, totalPages, searchQuery } = this.state;
    if (page === totalPages) {
      toast.warning('Sorry, there are no images');
    }
    if (prevState.searchQuery !== searchQuery) {
      this.setState({ isScrollUp: false });
    }
  }

  handleSubmitForm = query => {
    if (!query) return null;
    this.setState({ searchQuery: query, page: 1 });
  };

  handleClickLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  onModalOpen = imageId => {
    if (!imageId) return null;
    this.setState({ currentImage: imageId, isModal: true });
  };

  onModalClose = () => {
    this.setState({ currentImage: '', isModal: false });
  };

  updateTotalPages = totalHits => {
    this.setState({ totalPages: Math.ceil(totalHits / 12) });
  };

  onScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 300) {
      this.setState({ isScrollUp: true });
    } else {
      this.setState({ isScrollUp: false });
    }
  };

  onScrollUp = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.setState({ isScrollUp: false });
  };

  onLoader = loader => {
    this.setState({ isLoader: loader });
  };

  render() {
    const { searchQuery, page, totalPages, isModal, isScrollUp, currentImage } =
      this.state;
    return (
      <div onWheel={this.onScroll}>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {searchQuery && (
          <Layout>
            <ImageGallery
              searchQuery={searchQuery}
              page={page}
              onModalOpen={this.onModalOpen}
              totalPages={this.updateTotalPages}
            />
            {page < totalPages && (
              <ButtonLoadMore onClick={this.handleClickLoadMore} page={page} />
            )}
            {isModal && (
              <Modal
                currentImageId={currentImage}
                onModalClose={this.onModalClose}
              />
            )}
          </Layout>
        )}
        {isScrollUp && <ScrollUp onClick={this.onScrollUp} />}
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </div>
    );
  }
}
