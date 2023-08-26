import { Component } from 'react';
import PropTypes from 'prop-types';
import css from "./Searchbar.module.css";

class Searchbar extends Component{
  state = {
    value: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === "") {
      return alert("Input field is empty!");
    }
    this.props.onChange(this.state.value);
    this.setState({ value: "" });
  }

  handleChange = e => {
    this.setState({value: e.currentTarget.value})
  };


  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChange}
            className={css.SearchFormInput}
            type="text"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
