import * as React from "react";

const Card:React.FunctionComponent = () => {
  return (
    <article className="card">
      <figure className="card__content">
        <div className="card__image-wrapper">
          <img className="card__image" src="./img/placeholder1.jpg" width="200" height="100" alt="alttext" />
        </div>
        <figcaption className="card__text">
          Some text
        </figcaption>
      </figure>
      <div className="card__controls">
        <button className="button card__button" type="button" aria-label="like">
          <svg width="24" height="24" aria-hidden="true">
            <use xlinkHref="#icon-thumb"></use>
          </svg>
        </button>
        <button className="button card__button card__button--delete" type="button" aria-label="delete">
          <svg width="24" height="24" aria-hidden="true">
            <use xlinkHref="#icon-recycle"></use>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default Card;
