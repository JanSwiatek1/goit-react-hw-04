import css from './imageCard.module.css';
export const ImageCard = ({ image, onClick }) => {
    return (
        <div onClick={onClick}>
            <img
                src={image.urls.small}
                alt={image.alt_description || 'Unsplash image'}
                className={css.card}
            />
        </div>

    );
};