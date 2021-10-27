import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Home = () => {
  return (
    <div className='home-div'>
      <div className='home-div-main'>
        <div className='home-div-box-1'>
          <h1>Real time countries information</h1>
          <p>
            Look up information for any country in current time, such as weather, population,
            capital and flags.{' '}
          </p>
          <Link to='/getstarted'>
            <Button variant='success'>Get started</Button>{' '}
          </Link>
        </div>
        <div className='home-div-box-2'>
          <img
            src='https://npr.brightspotcdn.com/dims4/default/3e4f755/2147483647/strip/true/crop/1500x1064+0+0/resize/880x624!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fvpr%2Ffiles%2F201701%2FMap-countries-istock-ZarkoCvijovic-20170104.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
