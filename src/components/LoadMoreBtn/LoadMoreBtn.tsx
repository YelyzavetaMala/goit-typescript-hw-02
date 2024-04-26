import LoadMoreBtnProps from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleButtonClick }) => {
  return (
    <button type="button" onClick={handleButtonClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
