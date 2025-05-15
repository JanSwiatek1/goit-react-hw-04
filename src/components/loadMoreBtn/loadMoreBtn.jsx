import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      Load more
    </button>
  );
};
