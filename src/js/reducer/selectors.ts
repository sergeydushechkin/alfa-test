import {createSelector} from "reselect";

import {CardData} from "../types";
import {State} from "./reducer";

const getShowState = (state: State): boolean => {
  return state.showAll;
};

const getCards = (state: State): Array<CardData> => {
  return state.cards;
};

const getFilteredCards = createSelector(
    getCards,
    getShowState,
    (cards, showAll) => showAll ? cards : cards.filter((card) => {
      return card.isLiked;
    })
);

export {getShowState, getFilteredCards};
