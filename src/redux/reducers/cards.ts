import { ICard, IFecthCardsAction } from '../interfaces/Card.interfaces';
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
