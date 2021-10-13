import * as React from "react";
import {useDispatch} from "react-redux";
import {ActionCreator} from "../reducer/reducer";

const Header:React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const inputRef = React.useRef(null);

  return (
    <header className="site-header">
      <div className="site-header__container">
        <h1 className="site-header__heading">NASA Astronomy Picture of the Day (APOD)</h1>
        <div className="site-header__checkbox checkbox">
          <input ref={inputRef} className="visually-hidden" type="checkbox" name="liked" id="liked" onChange={() => dispatch(ActionCreator.changeShowAll(!inputRef.current.checked))}/>
          <label htmlFor="liked">Show only liked</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
