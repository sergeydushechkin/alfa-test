import {CardType} from "../const";
import {CardData, RowCard} from "../types";

export const createCard = (rowCard: RowCard):CardData => {
  const card = {
    title: rowCard.title,
    explanation: rowCard.explanation,
    thumbnail: rowCard[`media_type`] === CardType.IMAGE ? rowCard.url : rowCard[`thumbnail_url`],
    href: rowCard[`media_type`] === CardType.IMAGE ? rowCard.hdurl : rowCard.url,
    type: rowCard[`media_type`],
    isLiked: false,
  };

  return card;
};
