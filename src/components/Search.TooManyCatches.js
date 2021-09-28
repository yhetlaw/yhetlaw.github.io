const TooManyCatches = ({ status }) => {
  if (!status) {
    return null;
  }
  return <p>Too many catches, specify another filter!</p>;
};

export default TooManyCatches;
