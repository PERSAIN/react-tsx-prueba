import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/reducers/index';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Details: React.FC = () => {
  const card = useSelector((state: StoreState) => state.card);

  let navigate = useNavigate();

  const handleBackPage = (): void => {
    navigate('/');
  };
  return (
    <div>
      <header className='text-center mt-5'>
        <h1 className='text-dark'>Welcome to the specific card</h1>
      </header>

      {card === null ? (
        <div className='d-none'></div>
      ) : (
        <div className='container'>
          <div className='d-flex align-items-center' onClick={handleBackPage}>
            <FontAwesomeIcon icon={faAngleLeft} size='4x'/>
            <h3>Return</h3>
          </div>
          <div className='card mt-5'>
            <img
              style={{ height: '100%', width: '100%' }}
              className='card-img-top'
              src={`http://localhost:3000/${card.photoPath}`}
              alt=''
            />
            <div className='card-body'>
              <p className='card-text'>{card?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
