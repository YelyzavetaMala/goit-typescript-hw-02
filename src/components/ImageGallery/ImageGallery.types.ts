import { Image } from "../App/App.types";

interface ImageGalleryProps {
  imageGallery: Image[];
  openModal: (image: any) => void;
}

export default ImageGalleryProps;
