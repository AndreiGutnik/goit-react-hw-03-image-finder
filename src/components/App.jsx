import { ButtonLoadMore } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Layout } from './Layout';
import { Modal } from './Modal/Modal.styled';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  return (
    <>
      <Searchbar />
      <Layout>
        <ImageGallery />
        <ButtonLoadMore />
        <Modal />
      </Layout>
      <GlobalStyle />
    </>
  );
};
