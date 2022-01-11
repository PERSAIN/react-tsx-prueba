import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/reducers/index';

const Details: React.FC = () => {
  const card = useSelector((state: StoreState) => state.card);
  return (
    <div>
      <header className='text-center mt-5'>
        <h1 className='text-dark'>Welcome to the specific card</h1>
      </header>
      {card === null ? (
        <div className='d-none'></div>
      ) : (
        <div className='container'>
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
