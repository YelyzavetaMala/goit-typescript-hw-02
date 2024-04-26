import { Image } from "../App/App.types";

interface ImageModalProps {
  image: Image | null;
  modalIsOpen: boolean;
  closeModal: () => void;
  afterOpenModal: () => void;
}
export default ImageModalProps;
