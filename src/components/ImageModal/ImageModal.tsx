import { FC } from "react";
import Modal from "react-modal";
import ImageModalProps from "./ImageModal.types";
Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({
  image,
  modalIsOpen,
  closeModal,
}) => {
  if (!image) {
    return;
  }
  const dateString = image.created_at;
  const date = dateString ? new Date(dateString) : null;
  const formattedDate = date ? date.toLocaleDateString() : null;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
    >
      <div tabIndex={-1} id="modal-content">
        <img
          src={image.urls.regular}
          alt={image.alt_description || "No Description"}
        />
        <ul>
          <li>
            <p>Description</p>
            <p>{image.alt_description}</p>
          </li>

          <li>
            <p>Author</p>
            <p>{image.user.name}</p>
          </li>
          <li>
            <p>Date</p>
            <p>{formattedDate}</p>
          </li>
          <li>
            <p>Likes</p>
            <p>{image.likes}</p>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ImageModal;
