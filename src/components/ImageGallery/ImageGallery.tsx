import ImageCard from "../ImageCard/ImageCard";
import ImageGalleryProps from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  imageGallery,
  openModal,
}) => {
  return (
    <ul>
      {imageGallery.map((image, index) => {
        return (
          <li key={`${image.id}_${index}`}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
