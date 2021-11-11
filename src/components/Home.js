import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Home = () => {
  return (
    <div className='home'>
      <div className='home-card'>
        <div className='home-card__box1'>
          <h1 className='home-card__title'>Real time countries information</h1>
          <p className='home-card__text'>
            Look up information for any country in current time, such as weather, population,
            capital and flags.{' '}
          </p>
          <Link to='/getstarted'>
            <Button variant='success' className='home-card__button'>
              Get started
            </Button>{' '}
          </Link>
        </div>
        <div className='home-card__box2'></div>
      </div>
    </div>
  );
};

export default Home;
