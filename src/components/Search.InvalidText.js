import { Alert } from 'react-bootstrap';

const InvalidText = ({ status }) => {
  if (!status) {
    return null;
  }
  return <Alert variant='danger'>Invalid search requirements!</Alert>;
};

export default InvalidText;
