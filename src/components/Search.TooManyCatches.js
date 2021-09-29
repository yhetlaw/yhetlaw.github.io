import { Alert } from 'react-bootstrap';

const TooManyCatches = ({ status }) => {
  if (!status) {
    return null;
  }
  return <Alert variant='warning'>Too many catches, specify another filter!</Alert>;
};

export default TooManyCatches;
