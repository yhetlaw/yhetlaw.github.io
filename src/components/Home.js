import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-div'>
      <div className='home-div-main'>
        <div className='home-div-box-1'>
          <h1>Home page</h1>
          <Link to='/getstarted'>
            <button type='button'>Get started</button>
          </Link>
        </div>
        <div className='home-div-box-2'>
          <h1>Home page</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
