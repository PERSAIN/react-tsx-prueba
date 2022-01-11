import { ActionTypes } from '../enums/ActionTypes';

export interface ICard {
  _id: string;
  title: string;
  photoPath: string;
  description: string;
  shortDescription: string;
  createdAt: Date;
  updatedAt: Date;
  __V : number
}

export interface IFecthCardsAction {
  type: ActionTypes.FETCH_GET_CARDS;
  payload: ICard[];
}

export interface ISetInfoCardAction {
  type: ActionTypes.SET_CARD_INFO;
  payload: ICard;
}
