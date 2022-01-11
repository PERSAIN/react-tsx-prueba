import { ICard, IFecthCardsAction, ISetInfoCardAction } from '../interfaces/Card.interfaces';
import { ActionTypes } from '../enums/ActionTypes';

export const cardsReducer = (
  state: ICard[] = [],
  action: IFecthCardsAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_GET_CARDS:
      return action.payload;
    default:
      return state;
  }
};

export const cardInfoReducer = (
  state: ICard | null = null,
  action: ISetInfoCardAction
) => {
  switch (action.type) {
    case ActionTypes.SET_CARD_INFO:
      return action.payload;
    default:
      return state;
  }
};
