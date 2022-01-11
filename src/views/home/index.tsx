import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../redux/actions';
import { ICard } from '../../redux/interfaces/Card.interfaces';
import { StoreState } from '../../redux/reducers/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

interface HomeProps {
  cards: ICard[];
  fetchCards(value: string): any;
}

const mapStateToProps = (state: StoreState): { cards: ICard[] } => {
  return {
    cards: state.cards,
  };
};

const _Home: React.FC<HomeProps> = (props) => {
  const [search, searchState] = useState('');
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCards(props.cards);
  }, [props.cards]);

  const handleClick = (): void => {
    try {
      props.fetchCards(search);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: any) => {
    searchState(event.target.value);
    filter(event.target.value);
  };

  const renderListCards = (): JSX.Element[] => {
    return cards.map((card: ICard) => {
      return <div key={card.id}>{card.title}</div>;
    });
  };

  const filter = (cardSearched: string) => {
    let cards = props.cards.filter((element: ICard) => {
      if (element.title.toLowerCase().includes(cardSearched.toLowerCase()))
        return element;
    });
    setCards(cards);
  };

  console.log('estas son las cards =>', props.cards);
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
            />
          </div>
          <div className='col-lg-2'>
            <button className='btn btn-primary' onClick={handleClick}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2'></div>
          <div className='col-lg-10'>{renderListCards()}</div>
        </div>
      </div>
    </div>
  );
};

const Home = connect(mapStateToProps, { fetchCards })(_Home);

export default Home;
