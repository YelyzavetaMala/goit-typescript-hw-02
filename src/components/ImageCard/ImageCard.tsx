import ImageCardProps from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div>
      <img
        width={250}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        onClick={() => openModal(image)}
      />
    </div>
  );
};
export default ImageCard;
