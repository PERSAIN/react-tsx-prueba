import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../enums/ActionTypes';
import {
  ICard,
  IFecthCardsAction,
  ISetInfoCardAction,
} from '../interfaces/Card.interfaces';

const url = 'http://localhost:3000/cards/searched';

export const fetchCards = (searchedValue: string) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post<ICard[]>(url, {
      searchedValue: searchedValue,
    });
    dispatch<IFecthCardsAction>({
      type: ActionTypes.FETCH_GET_CARDS,
      payload: response.data,
    });
  };
};

export const setInfoCard = (card: ICard) => {
  return (dispatch: Dispatch) => {
    dispatch<ISetInfoCardAction>({
      type: ActionTypes.SET_CARD_INFO,
      payload: card,
    });
  };
};
