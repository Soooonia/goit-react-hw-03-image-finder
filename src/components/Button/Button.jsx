import PropTypes from 'prop-types';
import css from './Button.module.css';

function Button({ onMore }) {
  return (
    <button type="button" className={css.Button} onClick={onMore}>
      Load more
    </button>
  );
}

export default Button;

Button.propTypes = {
  onMore:PropTypes.func.isRequired,
}