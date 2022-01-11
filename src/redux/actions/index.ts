import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../enums/ActionTypes';
import { ICard, IFecthCardsAction } from '../interfaces/Card.interfaces';

const url = 'http://localhost:3000/cards';

export const fetchCards = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ICard[]>(url);
    dispatch<IFecthCardsAction>({
      type: ActionTypes.FETCH_GET_CARDS,
      payload: response.data,
    });
  };
};
