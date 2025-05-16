import css from './loadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      Load more
    </button>
  );
};
