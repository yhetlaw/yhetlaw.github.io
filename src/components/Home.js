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
        <div className='home-card__box2'>
          <img
            src='https://npr.brightspotcdn.com/dims4/default/3e4f755/2147483647/strip/true/crop/1500x1064+0+0/resize/880x624!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fvpr%2Ffiles%2F201701%2FMap-countries-istock-ZarkoCvijovic-20170104.jpg'
            alt=''
            className='home-card__img'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
