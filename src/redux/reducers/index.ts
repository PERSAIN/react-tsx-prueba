import { combineReducers } from "redux";
import { cardsReducer } from "./cards";
import { ICard } from '../interfaces/Card.interfaces';

export interface StoreState {
  cards: ICard[];
}

export const reducers = combineReducers<StoreState>({
  cards: cardsReducer
});