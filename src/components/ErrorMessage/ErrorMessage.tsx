import ErrorMessageProps from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = "" }) => {
  return (
    <p>
      {message.length > 0
        ? message
        : "Whoops, something went wrong! Please try reloading this page!"}
    </p>
  );
};

export default ErrorMessage;
