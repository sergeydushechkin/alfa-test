import {AxiosInstance} from "axios";
import {ThunkAction} from "redux-thunk";

import {createCard} from "../adapters/card";
import {CardParam, CardType} from "../const";
import {CardData} from "../types";

interface State {
  showAll: boolean;
  cards: Array<CardData> | [];
  error: string;
}

interface Action {
 type: string;
 payload: boolean | Array<CardData> | string;
}

type OperationType = ThunkAction<Promise<void>, State, AxiosInstance, Action>;

const initialState: State = {
  showAll: true,
  cards: [],
  error: ``,
};

const ActionType = {
  CHANGE_SHOW_STATE: `CHANGE_SHOW_STATE`,
  CHANGE_LIKE_STATE: `CHANGE_LIKE_STATE`,
  LOAD_CARDS_DATA: `LOAD_CARDS_DATA`,
  REMOVE_CARD: `REMOVE_CARD`,
  CHANGE_ERROR_STATE: `CHANGE_ERROR_STATE`,
};

const ActionCreator = {
  loadCardsData: (cards: Array<CardData>):Action => ({
    type: ActionType.LOAD_CARDS_DATA,
    payload: cards
  }),
  changeShowAll: (state: boolean):Action => ({
    type: ActionType.CHANGE_SHOW_STATE,
    payload: state
  }),
  changeLikeState: (id: string):Action => ({
    type: ActionType.CHANGE_LIKE_STATE,
    payload: id,
  }),
  removeCard: (id: string):Action => ({
    type: ActionType.REMOVE_CARD,
    payload: id,
  }),
  changeError: (text: string):Action => ({
    type: ActionType.CHANGE_ERROR_STATE,
    payload: text,
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
    case ActionType.CHANGE_LIKE_STATE:
      const slicedCards = state.cards.slice();
      const changeIndex = slicedCards.findIndex((it) => it.id === action.payload);
      slicedCards[changeIndex].isLiked = !slicedCards[changeIndex].isLiked;
      return Object.assign({}, state, {cards: slicedCards});
    case ActionType.LOAD_CARDS_DATA:
      return Object.assign({}, state, {cards: action.payload});
    case ActionType.REMOVE_CARD:
      const index = state.cards.findIndex((it) => it.id === action.payload);
      const newCards = [].concat(...state.cards.slice(0, index), ...state.cards.slice(index + 1, state.cards.length));
      return Object.assign({}, state, {cards: newCards});
    case ActionType.CHANGE_ERROR_STATE:
      return Object.assign({}, state, {error: action.payload});
    default:
      return state;
  }
};

export {reducer, ActionCreator, Operation, State};
