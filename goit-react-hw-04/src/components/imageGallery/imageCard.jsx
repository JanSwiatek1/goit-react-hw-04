
export const ImageCard = ({ image, onClick }) => {
    return (
        <div onClick={onClick}>
            <img
                src={image.urls.small}
                alt={image.alt_description || 'Unsplash image'} />
        </div>

    );
};