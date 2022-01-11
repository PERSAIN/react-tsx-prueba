import { combineReducers } from "redux";
import { cardsReducer, cardInfoReducer } from './cards';
import { ICard } from '../interfaces/Card.interfaces';

export interface StoreState {
  cards: ICard[];
  card: ICard | null;
}

export const reducers = combineReducers<StoreState>({
  cards: cardsReducer,
  card: cardInfoReducer
});