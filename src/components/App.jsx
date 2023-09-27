import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from "./ImageGallery"
import Button from './Button';
import SearchApi from "./SearchApi"
import Loader from './Loader/Loader';
import Modal from './Modal';
import css from "./App.module.css";


class App extends Component {
  state = {
    value: null,
    page: 1,
    gallery: [],
    status: 'allow',
    showModal: false,
    largeImage:"",
  };

  componentDidUpdate(prevProps, prevState) {
    const { status, value, page } = this.state;

    if (status === 'allow') {
      this.setState({ status: 'loading' });
      SearchApi(value, page)
        .then(response => response.json())
        .then(ar =>
          this.setState(
            ({ gallery }) => ({
              gallery: [...gallery, ...ar.hits],
              status: 'deny',
            }),
            this.alertEmptyArray(ar.hits.length)
          )
        );
    }
  }

  alertEmptyArray = (value) => {
    if (!value) {
      return alert ("Ooops there is no images, try another search!")
    }
  }

  openModal = (img) => {
    this.setState({ showModal: true });
    this.setState({largeImage:img})
  };

  closeModal = () => {
    this.setState({ showModal:false });
  }

  onSubmit = name => {
    if (name === this.state.value) {
      return alert('Try another input value!');
    }
    this.setState({ value: name, page: 1, gallery: [], status: 'allow' });
  };

  onMore = () => {
    this.setState(prevSatate => ({
      page: prevSatate.page + 1,
      status: 'allow',
    }));
  };

  render() {
    const { gallery, status, showModal } = this.state;
    return (
      <section>
        <div className={css.App}>
          <Searchbar onChange={this.onSubmit} />
          <ImageGallery gallery={gallery} openModal={this.openModal} />
          {gallery.length > 0 && (
            <div className={css.buttonContainer}>
              <Button onMore={this.onMore} />
            </div>
          )}
          {status === 'loading' && (
            <div className={css.loader}>
              <Loader />
            </div>
          )}
          {showModal && (
            <Modal onClose={this.closeModal}>
              <img
                className={css.img}
                src={this.state.largeImage}
                width="900"
                alt=""
              />
            </Modal>
          )}
        </div>
      </section>
    );
  }
}


export default App;