import { ActionTypes } from '../enums/ActionTypes';

export interface ICard {
  id: number;
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
