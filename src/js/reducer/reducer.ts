import {AxiosInstance} from "axios";
import {ThunkAction} from "redux-thunk";

import {createCard} from "../adapters/card";
import {CardParam, CardType} from "../const";
import {CardData} from "../types";

interface State {
  showAll: boolean;
  cards: Array<CardData> | [];
}

interface Action {
 type: string;
 payload: boolean | Array<CardData>;
}

type OperationType = ThunkAction<Promise<void>, State, AxiosInstance, Action>;

const initialState: State = {
  showAll: true,
  cards: [],
};

const ActionType = {
  CHANGE_SHOW_STATE: `CHANGE_SHOW_STATE`,
  LOAD_CARDS_DATA: `LOAD_CARDS_DATA`,
  REMOVE_CARD: `REMOVE_CARD`,
};

const ActionCreator = {
  loadCardsData: (cards: Array<CardData>):Action => ({
    type: ActionType.LOAD_CARDS_DATA,
    payload: cards
  }),
};

const Operation = {
  getCardsData: (): OperationType => (dispatch, getState, api) => {
    return api.get(`/apod`, {
      params: {
        [`api_key`]: CardParam.KEY,
        count: CardParam.COUNT,
        thumbs: CardParam.THUMBS
      }
    })
    .then((response) => {
      const cards = response.data.map((it) => {
        return createCard(it);
      });

      return cards;
    })
    .then((cards) => {
      const filteredCards = cards.filter((data) => {
        return data.type === CardType.IMAGE || data.type === CardType.VIDEO;
      });

      dispatch(ActionCreator.loadCardsData(filteredCards));

      return filteredCards;
    });
  },
};

const reducer = (state: State = initialState, action: Action):State => {
  switch (action.type) {
    case ActionType.CHANGE_SHOW_STATE:
      return Object.assign({}, state, {showAll: action.payload});
    case ActionType.LOAD_CARDS_DATA:
      return Object.assign({}, state, {cards: action.payload});
    case ActionType.REMOVE_CARD:
      return Object.assign({}, state, {cards: action.payload});
    default:
      return state;
  }
};

export {reducer, ActionCreator, Operation, State};
