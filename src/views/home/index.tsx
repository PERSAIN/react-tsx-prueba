import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards, setInfoCard } from '../../redux/actions';
import { ICard } from '../../redux/interfaces/Card.interfaces';
import { StoreState } from '../../redux/reducers/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './Home.css';

interface HomeProps {
  cards: ICard[];
  fetchCards(value: string): any;
  setInfoCard(value: ICard): any;
}

const mapStateToProps = (state: StoreState): { cards: ICard[] } => {
  return {
    cards: state.cards,
  };
};

const _Home: React.FC<HomeProps> = (props) => {
  let navigate = useNavigate();

  const [search, searchState] = useState('');
  const [cards, cardsState] = useState<ICard[]>([]);

  useEffect(() => {
    cardsState(props.cards);
  }, [props.cards]);

  const handleOnKeyDown = async (
    event: React.KeyboardEvent<HTMLDivElement>
  ): Promise<void> => {
    if (event.key === 'Enter') {
      try {
        await props.fetchCards(search);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleClick = async (): Promise<void> => {
    try {
      await props.fetchCards(search);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: any): void => {
    searchState(event.target.value);
    filter(event.target.value);
  };

  const selectedCard = (card: ICard): void => {
    props.setInfoCard(card);
    navigate('/details');
  };

  const renderListCards = (): JSX.Element[] => {
    return cards.map((card: ICard) => {
      return (
        <div className='row mt-5'>
          <div className='col-lg-3'>
            <img
              style={{ height: '100%', width: '100%' }}
              src={`http://localhost:3000/${card.photoPath}`}
              alt=''
            />
          </div>
          <div className='col-lg-9'>
            <div className='container'>
              <h1 className='card-info' onClick={() => selectedCard(card)}>
                {card.title}
              </h1>
              <h2>{card.shortDescription}</h2>
            </div>
          </div>
        </div>
      );
    });
  };

  const filter = (cardSearched: string): void => {
    // eslint-disable-next-line array-callback-return
    let cards = props.cards.filter((element: ICard) => {
      if (element.title.toLowerCase().includes(cardSearched.toLowerCase()))
        return element;
    });
    cardsState(cards);
  };

  return (
    <div className='Home'>
      <header className='home-header'>
        <h1 className='text-dark'>Welcome to my search engine</h1>
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10'>
            <input
              className='form-control inputBuscar'
              value={search}
              placeholder='search by title'
              onChange={handleChange}
              onKeyDown={(e) => handleOnKeyDown(e)}
            />
          </div>
          <div className='col-lg-2'>
            <button className='btn btn-primary' onClick={handleClick}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
      <div className='container'>{renderListCards()}</div>
    </div>
  );
};

const Home = connect(mapStateToProps, { fetchCards, setInfoCard })(_Home);

export default Home;
